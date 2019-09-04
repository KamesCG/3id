/* --- Global Dependencies --- */
import idx from 'idx'
import React from "react";
import { connect } from 'react-redux';

/* --- Local Dependencies --- */
import IssuerRoutes from 'routes/credentialsDashboard'
import MenuItems from 'static/menus/issuers'
import {
  BackgroundGradient, ButtonFlat,
  Box, Flex, Heading, Span
} from "atoms";
import { MenuSidebar } from 'components'

/* ------- Component ------- */
class Campaign extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false
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

  // Error Catched
  componentDidCatch() {
    
  }

  render(){
    const { isLoading } = this.state
    return( 
      isLoading
      ? <Flex center column fill>Loading...</Flex>
      :<>
      <Flex column justifyCenter height={100}>
        <BackgroundGradient gradient='blue' gradientDir={135} />
        <Flex alignCenter between px={25}>
          <Flex column color='white'>
            <Heading fontSize={[4]} slim>
              Credentials
            </Heading>
            <Heading level={6} fontSize={[2]} fontWeight={300}>
              {/* <EntityNameLookup isLinked {...parent} styled={{sm: true, thin: true}}/> */}
            </Heading>
          </Flex>
          <Box>
            <ButtonFlat white >Issue Credential</ButtonFlat>
          </Box>
        </Flex>
      </Flex>
      <Flex p={20} width={1} minHeight='calc(100% - 100px)'>
        <Flex direction={['column', 'column', 'row']} width={1} >
          <Flex width={[1,1,0.2]} flex={2} >
            <Flex card column width={1} height='100%'>
              <MenuSidebar items={[
                {
                  // icon: <IoIosContacts size={'1.2em'}/>,
                  label: 'Active',
                  to: '/dashboard/credentials',
                },
                {
                  // icon: <IoIosFiling size={'1.2em'}/>,
                  label: 'Types',
                  to: '/dashboard/credentials/types',
                },
                {
                  // icon: <IoMdTimer size={'1.2em'}/>,
                  label: 'Issuer',
                  to: '/dashboard/credentials/issue',
                },
                
              ]} label={'Options'}/>
            </Flex>
          </Flex>
          <Flex flex={10} width={[1,1,0.8]} ml={[0,0, 30]}>
            <Box width={1}>
              <IssuerRoutes/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      </>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({

});


const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)
