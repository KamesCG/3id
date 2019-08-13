/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from "react-redux";

/* --- Local Dependencies --- */
import data from 'store/departments/data/actions'
import { fromData } from 'store/departments/selectors'
import { Flex } from 'atoms'
import { VerifiableCredentialBasic } from 'containers'

const Query =`
{
  getVerifiableCredentials {
    id
    type
    iss
    sub
    claim 
  }
}
`

// console.log(selectors, 'selectors')
/* --- React Component --- */
class VerifiableCredentialQuery extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  /* Did Mount */
  componentDidMount()
  {
    this.props.queryRequest(Query)
  }
  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {
    console.log(this.props, 'query')
  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      <Flex column width={1}>
        {
          idx(this.props, _=>_.request.status) &&
          this.props.request.output.map( vc => <VerifiableCredentialBasic {...vc}/>)
        }
      </Flex>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  request: fromData.get(state,  `search|verifiable-credential`),
});


const mapDispatchToProps = (dispatch, props) => ({
  queryRequest: (query) =>dispatch(data.queryRequest('REQUEST')(
    query,
    {
      delta: 'search|verifiable-credential',
    }
  ))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifiableCredentialQuery)