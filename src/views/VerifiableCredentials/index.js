/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';
import { Router } from '@reach/router'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* --- Local Dependencies --- */
import { Box, Button, ButtonFlat, Heading, Flex, Span } from 'atoms'
import { Modal, Panel } from 'components'
import { IssuersTable } from 'containers'
import { FormIssuerCreate, FormVerifiableCredentialTemplate } from 'forms'
import { MenuVerifiableCredentials } from 'views'
import {
  IssueClaims, Templates, TemplateCreate, Roles,
  } from 'views'
/* --- React Component --- */
class OrganizationView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Verifiable Credentials",
      isLoading: true
    }
  }

  componentDidMount()
  {

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
      <Flex column  height='100%'>
        <Flex align='center' between boxShadow={0} gradient='white' p={15}>
          <Heading color='turquoise' fontSize={[3,3,4]} fontWeight={300} mb={0} >
            {this.state.name}
          </Heading>
          <Box>
            
          </Box>
          <Flex>
            {/* <ButtonFlat palette='orange' ml={15}>Add Issuer</ButtonFlat> */}
            <Panel modal={<FormVerifiableCredentialTemplate/>} >
              <ButtonFlat children='Create Template' palette='green' ml={15}/>
            </Panel>
            <Panel modal={<FormIssuerCreate/>} >
              <ButtonFlat children='Add Issuer' palette='orange' ml={15}/>
            </Panel>
          </Flex>
        </Flex>

        <Flex between height='100%'>
          <Flex column height='100%' gradient='turquoise' width={[1,1,1,0.15]}>
            <MenuVerifiableCredentials/>
          </Flex>
          <Flex  height='100%' width={[1,1,1,0.85]} p={25}>
            <Flex boxShadow={0} gradient='white' p={15} width={1}>
            <PerfectScrollbar>
              <Router>
                <IssueClaims path="/issue" />
                <Templates path="/templates" />
                <TemplateCreate path="/templates/create" />
                <FormVerifiableCredentialTemplate path="/template/create" />
                <IssuersTable path="/issuers" />
              </Router>
              </PerfectScrollbar>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationView)