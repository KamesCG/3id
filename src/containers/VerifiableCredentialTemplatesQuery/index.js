/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from "react-redux";
import { Link } from "@reach/router";

/* --- Local Dependencies --- */
import data from 'store/departments/data/actions'
import { fromData } from 'store/departments/selectors'
import { Box, ButtonFlat, Button, Flex, Heading, HorizontalRule, Paragraph, Span } from "atomic";
import { Modal, Panel } from 'components'
import { VerifiableCredentialBasic } from 'containers'

import { FormVerifiableCredentialGenerate } from 'forms'

const Query =`
{
  getTemplates {
    type
    name
    description
    claim_fields {
      name
      description
    }
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

  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      <>
      <Flex column width={1}>
        {
          idx(this.props, _=>_.request.status) &&
          this.props.request.output.map( vc => <VerifiableCredentialTemplate {...vc}/>)
        }
      </Flex>
      </>
    )
  }
}
/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  request: fromData.get(state,  `query|verifiableCredentialTemplates`),
});


const mapDispatchToProps = (dispatch, props) => ({
  queryRequest: (query) =>dispatch(data.queryRequest('REQUEST')(
    query,
    {
      delta: 'query|verifiableCredentialTemplates',
    }
  ))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifiableCredentialQuery)


const VerifiableCredentialTemplate = ({ alias, name, claim_fields, description, type }) =>
<Flex between borderBottom='1px solid' borderColor='gray' py={20} align='center' width={1}>
  <Box width={[1,1, .55]}>
    <Heading color='blue' fontSize={[3]}>
      {name}
    </Heading>
    <Paragraph fontSize={[2]}>
      <strong>Type:</strong> {type}
    </Paragraph>
    <Paragraph fontSize={[2]}>
      <strong>Description:</strong> {description}
    </Paragraph>
  </Box>

  <Box>
  <Panel modal={<div>testing</div>} >
    <ButtonFlat sm uppercase palette='blue'>
      View Template
    </ButtonFlat>
  </Panel>
  <Panel modal={<FormVerifiableCredentialGenerate name={name} description={description} type={type} claims={claim_fields} />} >
    <ButtonFlat sm uppercase palette='green' ml={15}>
      Issue Credential
    </ButtonFlat>
  </Panel>
  </Box>
</Flex>