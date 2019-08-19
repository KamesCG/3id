/* --- Global Dependencies --- */
import React from 'react'
import Box from '3box'
/* --- Local Dependencies --- */

/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile: undefined
    }
  }
  
  // Mounted
  async componentDidMount()
  {
    const profile = await Box.getProfile(this.props.address)
    console.log(profile)
    this.setState({
      profile
    })
  }
  // Updated
  componentDidUpdate()
  {

  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    return(
      <div></div>
    )
  }
}

export default ClassComponent