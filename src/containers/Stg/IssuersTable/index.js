/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';
import ReactTable from 'react-table'
 
/* --- Local Dependencies --- */
import data from 'storeRedux/departments/data/actions'
import { fromData } from 'storeRedux/departments/selectors'
import { ButtonFlat, Heading, HorizontalRule, Paragraph, Span } from 'atoms'

/* --- React Component --- */
class IssuersTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: undefined,
      isLoading: true
    }
  }
  
  // Mounted
  componentDidMount()
  {
    if(!idx(this.props, _=>_.query.status)) {
      this.props.queryRequest()
    } else {
      this.setState({
        data: this.props.query.output.getIssuers
      })
    }
  }

  // Updated
  componentDidUpdate()
  {
    if(idx(this.props, _=>_.query.status) && this.state.isLoading) {
      this.setState({
        data: this.props.query.output.getIssuers,
        isLoading: false
      })
    }
    console.log(this.props)
    console.log(this.state, 'query table')
  }

  // Catched Error
  componentDidCatch()
  {

  }

  // Render
  render() {  
    const { data, isLoading } = this.state
  
    return (
    isLoading
    ? <Span fontSize={[1]}>Loading...</Span>
    : <ReactTable
        data={data}
        columns={columns}
      />
      )
  }
}

const MutationGenerate = () =>`
{
  getIssuers {
    id
    address
    did
    name
    description
  }
}
`

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  query: fromData.get(state, 'issuers|query'),
});


const mapDispatchToProps = (dispatch, props) => ({
  queryRequest: (mutation) =>dispatch(data.mutateRequest('REQUEST')(
    MutationGenerate(),
    {
      delta: 'issuers|query',
    }
  ))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuersTable)
const columns = [
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },
  {
    Header: 'Decentralized Identifier',
    accessor: 'did',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
  {
    Header: 'Address',
    accessor: 'address',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
  {
    Header: 'Profile',
    accessor: 'site',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
  {
    Header: 'Description',
    accessor: 'description',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
]

const dataExample = [
  {
    name: 'ConsenSys',
    address: '0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE',
    profile: 'www.ConsenSys.net',
    issued: '55',
  },
  {
    name: 'Rapid',
    address: '0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE',
    profile: 'www.ConsenSys.net',
    issued: '505',
  },
  {
    name: 'Civil',
    address: '0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE',
    profile: 'www.civil.io',
    issued: '20,000',
  }
]