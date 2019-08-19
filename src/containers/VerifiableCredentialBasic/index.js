/* --- Global Dependencies --- */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

/* --- Local Dependencies --- */
import { Box, ButtonFlat, Flex, Heading, HorizontalRule, Paragraph, Span } from "atomic";
import { Panel } from 'components'

/* --- Component --- */
class VerifiableCredentialBasic extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount()
  {

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { type, iss, sub, date } = this.props
    return (
      <>
      <Flex align='center' between borderBottom='1px solid' borderColor='gray' py={10}>
        <Flex column>
          <Span color='blue' fontSize={[1,1,2]}>{type}</Span>
          <Span fontSize={1}><strong>Issuer:</strong> {iss}</Span>
          <Span fontSize={1}><strong>Subject:</strong> {sub}</Span>
          {
            date &&
            <Span fontSize={[1,1,2]}><strong>Issue Date:</strong> {date}</Span>
          }
        </Flex>
        <Box>
          <Panel modal={<Claims claims={this.props.claims} type={this.props.type} sub={this.props.sub} iss={this.props.iss} date={this.props.date} />}>
            <ButtonFlat sm uppercase palette='blue' fontSize={1}  onClick={this.openModal}>Details</ButtonFlat>
          </Panel>
        </Box>
      </Flex>
      </>
    );
  }
}

export default VerifiableCredentialBasic


const Claims = ({ claims, type, iss, sub, date }) =>
!claims ? null :
<>
<Tabs>
  <Flex align='center' between borderBottom='1px solid' borderColor='gray' pb={10} mb={15}>
    <Heading color='blue' fontSize={[3,3,4]}>
      Verifiable Credential
    </Heading>
    <Flex>
      <TabList className='tabs'>
        <Tab className='tabs--tab' selectedClassName={'tabs--tab--selected'} ><Span fontSize={[2]}>Claim</Span></Tab>
        <Tab className='tabs--tab' selectedClassName={'tabs--tab--selected'}><Span fontSize={[2]} ml={10}>Verify</Span></Tab>
      </TabList>
    </Flex>
  </Flex>
  <TabPanel>
    <Flex column>
      <Span color='blue' fontSize={[1,1,2,3]}>{type}</Span>
      <Span fontSize={[1,1,2]}><strong>Issuer:</strong> {iss} | <Span color='blue'>	<a href="#">profile</a></Span></Span>
      <Span fontSize={[1,1,2]}><strong>Subject:</strong> {sub} | <Span color='blue'>	<a href="#">profile</a></Span></Span>
      {
        date &&
        <Span fontSize={[1,1,2]}><strong>Issue Date:</strong> {date}</Span>
      }
    </Flex>
    <Heading color='blue' fontSize={[3]} mt={25}>
      Claims
    </Heading>
    <HorizontalRule my={10} />
    <Flex column>
      {
        claims.map( claim => <Claim id={claim.key} {...claim}/> )
      }
    </Flex>
  </TabPanel>
  <TabPanel>

    <Heading fontSize={[3]}>
      Check Signature
    </Heading>
    <Paragraph fontSize={[1]}>
      Verifiable Credentials are cryptographically signed to guarnatee the origin and issuer. Check the credential signature matches the published signing key of the issuer.
    </Paragraph>
    <Heading fontSize={[2]}>
      JWT
    </Heading>
    <Paragraph fontSize={[1]}>
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
    </Paragraph>
    <ButtonFlat palette='orange' uppercase width={1}>Check Signature</ButtonFlat>
    <ButtonFlat uppercase palette='blue' mt={15} width={1}>Issuer Profile</ButtonFlat>
  </TabPanel>
  
</Tabs>
</>

const Claim = ({ key, id, value }) => <Span fontSize={[1,1,2]}>	{id}: {value}</Span>
