/* --- Global Dependencies --- */
import React from "react";
import Modal from 'react-modal';
import { Box, Flex } from 'atoms'
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

  }

  openModal()
  {
    this.setState({modalIsOpen: true});
  }

  closeModal()
  {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <>
      <span onClick={this.openModal}>{this.props.children}</span>
      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
        <Box boxShadow={1} borderRadius={10} p={25} width={620} {...this.props.styled} >
          {this.props.modal}
        </Box>
      </Modal>
      </>
    );
  }
}

export default VerifiableCredentialBasic