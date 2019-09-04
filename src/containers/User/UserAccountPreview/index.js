/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';

/* --- Local Dependencies --- */
import { database } from 'store/selectors'
import { databaseReadRequest, databaseWriteRequest } from 'store/departments/actions'
import { Avatar, Box, Flex, Heading, Span } from 'atoms'

/* --- Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  // Mounted
  componentDidMount()
  {
    if(!idx(this.props, _=>_.user)) {
      
    } else {
      this.setState({
        ...this.props.user.output,
        isLoading: false
      })
    }
  }
  // Updated
  componentDidUpdate()
  {
    if(idx(this.props, _=>_.user) && this.state.isLoading) {
      this.setState({
        ...this.props.user.output,
        isLoading: false
      })
    }
  }

  // Catch Error
  componentDidCatch()
  {

  }


  render(){
    const { image, name, email } = this.state
    return(
      <Flex alignCenter width={1}>
        <Avatar src={image}/>
        <Box ml={15}>
          <Heading fontSize={[3]}>
            {name}
          </Heading>
          <Heading level={5} sm thin >
            {email}
          </Heading>
        </Box>
      </Flex>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  user: database.get(state,  `user`),
});


const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent)