/* --- Global Dependencies --- */
import React from "react";
import Modal from 'react-modal';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Box, Flex } from 'atoms'
/* --- Style --- */
const customStyles = {
  content : {
    boxShadow: '0 4px 16px 0 rgba(88,103,221, 0.415)',
    border:               'none',
    top                   : '0',
    right                 : '0',
    left                 : 'unset',
    bottom                : '0',
    overflow             :'visible',
    padding: 0,
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
        <Box p={20} height='100%' width={620} {...this.props.styled} >
          <PerfectScrollbar>
            {this.props.modal}
          </PerfectScrollbar>
        </Box>
      </Modal>
      </>
    );
  }
}

export default VerifiableCredentialBasic