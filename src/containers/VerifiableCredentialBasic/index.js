/* --- Global Dependencies --- */
import React from "react";
import Modal from 'react-modal';

/* --- Local Dependencies --- */
import { Box, Button, Flex, Heading, Span } from "atomic";
import { VerifiableCredentialAdvanced } from 'containers'

/* --- Module Dependencies --- */
import Component from "./component";


/* --- Style --- */
const customStyles = {
  content : {
    border:               'none',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow: 'visible',
    padding: 0,
    transform             : 'translate(-50%, -50%)'
  }
};


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
    console.log(this.props, 'vc basic')
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <>
      <Flex align='center' between borderBottom='1px solid' borderColor='gray'>
        <Flex column>
          <Span fontSize={1}><strong>Issuer:</strong> {this.props.iss}</Span>
          <Span fontSize={1}><strong>Subject:</strong> {this.props.sub}</Span>
          <Span fontSize={1}><strong>Issue Date:</strong> {this.props.issuanceDate}</Span>
        </Flex>
        <Box>
          <Button color='white' gradient='blue' fontSize={1}  onClick={this.openModal} >View Claim(s)</Button>
        </Box>
      </Flex>
      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >

        <VerifiableCredentialAdvanced
          issuer={this.props.issuer}
          issuerAddress='0x'
          issuerProfile="kames"
          credentialTitle='Email Verifiation Claims'
          decoded={this.props.claim}/>
        </Modal>
      </>
    );
  }
}

export default VerifiableCredentialBasic