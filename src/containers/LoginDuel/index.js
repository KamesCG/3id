/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';

/* --- Local Dependencies --- */
import { shortenAddress } from 'helpers/ethereum'
import { Web3Context } from 'contexts/Providers/Web3Wrapper'
import { fromData } from 'storeRedux/departments/selectors'
import { Box, ButtonFlat, Flex, Heading, Span, HorizontalRule } from 'atoms'
import { Popover } from 'components'
import { LoginEthereum } from 'containers'

import Profile from './profile'
/* --- Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    if (typeof window !== `undefined`) {
      this.state = {
        address: window.ethereum && window.ethereum.selectedAddress
      }
    } else {
      this.state = {
        address: null
      }
    }
  }
  
  // Mounted
  componentDidMount()
  {

  }
  // Updated
  componentDidUpdate()
  {

  }

  // Catch Error
  componentDidCatch()
  {

  }


  render(){
    return(
        <Flex alignCenter>
          <Popover content={ProfilePopover} >
            <Span pointer fontSize={[1]}>Identity (<Span fontSize={[1]} fontWeight={700} >{shortenAddress(this.state.address, 7)}</Span>) <strong>℗</strong></Span>
          </Popover>
          <Span fontSize={[1]} mx={10}>	|</Span>
          <Popover content={ServicesRendered} >
            <Span pointer fontSize={[1]}>Services <strong>↓</strong></Span>
          </Popover>
          <Span fontSize={[1]} mx={10}>	|</Span>
          <LoginEthereum/>
        </Flex>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  write: fromData.get(state,  ''),
});


const mapDispatchToProps = (dispatch, props) => ({

});

const ServicesRendered = ()=> <Services gradient='blue' />

const Services =  ({ position, targetRect, popoverRect }) =>
<Box style={{background: 'white', boxShadow: 'rgba(156, 156, 156, 0.54) 0px 0px 5px 0px', borderRadius: 6, marginRight: '10px', padding: 20, width: 300}}>
  <Heading  borderBottom='1px solid' borderColor='#f2f2f2' pb={10} fontSize={[3]}>
    Services
  </Heading>
  <Flex column>
    <Span fontSize={[1]}><strong>Credentialize:</strong> Disconnected</Span>
    <Span fontSize={[1]}><strong>Alpine Ivan:</strong> Disconnected</Span>
  </Flex>
</Box>

const ProfilePopover = props => 
<Box style={{background: 'white', boxShadow: 'rgba(156, 156, 156, 0.54) 0px 0px 5px 0px', borderRadius: 6, marginRight: '10px', padding: 20, width: 300}}>
  <Web3Context.Consumer>
  { web3 => (
    <Profile address={web3.address} web3={web3} />
  )}
  </Web3Context.Consumer>
</Box>



export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent)