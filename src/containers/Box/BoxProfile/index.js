/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
 
/* --- Local Dependencies --- */
import { BoxConsumer } from 'context/Providers/BoxProvider'
import { boxLogo } from 'assets/images'
import { Avatar, Box, Image, Flex, Loading, Heading, Span } from 'atoms'
import { BoxCard } from 'components'
/* --- React Component --- */
class BoxProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    this.props.box.open()
    this.setState({isLoading: true})
  }
  logout() {
    this.props.box.logout()
    this.setState({isLoading: false})
  }
  
  // Mounted
  componentDidMount()
  {
    this.props.box.lookupProfile(this.props.address)
  }
  // Updated
  componentDidUpdate()
  {

    console.log(this.props, 'box card')
  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    const { box } = this.props
    const { isLoading } = this.state
    const entity = idx(box, _=>_.entities[this.props.address])
    console.log(entity, 'entity')
    return(
     <BoxCard {...entity}/>
    )
  }
}


export default (props) =>
<BoxConsumer>
  <BoxProfile {...props}/>
</BoxConsumer>


const GenerateImage = image => {
  const IPFSFile = hash => `https://ipfs.io/ipfs/${hash}`
  const imageipfs = idx(image, _=>_[0].contentUrl['/'])
  ? IPFSFile(idx(image, _=>_[0].contentUrl['/']))
  : null
  return imageipfs
}