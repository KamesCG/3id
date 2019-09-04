/* --- Global Dependencies --- */
import idx from 'idx'
import React from "react";
import { connect } from 'react-redux';
import { Link } from '@reach/router'
/* --- Local Dependencies --- */
import { fromDatabase } from 'store/departments/selectors'
import { databaseReadRequest } from 'store/departments/actions'
import { Heading, Loading, Span } from "atoms";
import { MenuSidebar } from 'components'

/* ------- Component ------- */
class Campaign extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  // Mounted
  componentDidMount()
  {
    if(!idx(this.props, _=>_.result.status)) {
      this.props.read()
    } else {
      this.setState({
        ...this.props.result.output,
        isLoading: false
      })
    }
  }
  // Updated
  componentDidUpdate()
  {
    if(idx(this.props, _=>_.result.status) && this.state.isLoading) {
      this.setState({
        ...this.props.result.output,
        isLoading: false
      })
    }
  }

  // Error Catched
  componentDidCatch() {
    
  }

  render(){
    const { name, isLoading } = this.state
    const { styled, isLinked, type, id } = this.props
    return(
      !type ? null :
      isLoading
      ? <Loading/>
      : isLinked
        ? <Link to={`/dashboard/${type}/${id}`}>
            <Heading {...styled} children={`${name} (${type})`}/>
          </Link>
        : <Heading {...styled} children={name}/>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  result: fromDatabase.get(state,  `read|${props.type}|item|${props.id}`),
});


const mapDispatchToProps = (dispatch, props) => ({
  read: (filter)=>dispatch(databaseReadRequest({
    metadata: {
      branch: [`${props.type}s`, props.id],
      delta: `read|${props.type}|item|${props.id}`,
      ...filter
    } 
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)
