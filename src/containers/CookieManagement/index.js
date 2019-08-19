/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { withCookies } from 'react-cookie';
import GraphQLClient from 'settings/graphql'

/* --- Local Dependencies --- */

/* --- React Component --- */
class CookieManagement extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount()
  {
    if(idx(this.props, _=>_.allCookies.jwt)) {
      GraphQLClient.setHeaders({
        authorization: `Bearer ${this.props.allCookies.jwt}`
      })
      this.setState({
        isLoading: false
      })
    } else {
      this.setState({
        isLoading: false
      })
    }
  }
  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      this.state.isLoading ? null : this.props.children
    )
  }
}

export default withCookies(CookieManagement)