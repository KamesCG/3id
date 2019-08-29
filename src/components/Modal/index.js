/* --- Global Dependencies --- */
import React from "react";
import Modal from 'react-modal';
import { Box, Flex, Span } from 'atoms'
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
  },
  overlay: {
    backgroundColor: 'rgba(78, 78, 78, 0.5)'
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
    if(this.props.openOnMount) {
      this.openModal()
    }
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
    const { label } = this.props
    return (
      <>
      <span onClick={this.openModal}>{this.props.children}</span>
      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
        <Flex alignCenter between bg='blue' color='white' p={10}>
          <Span fontSize={[3]}>{label}</Span>
          <Span onClick={this.closeModal} fontSize={[2]} fontWeight={700} pointer>X</Span>
        </Flex>
        <Box boxShadow={1} borderRadius={10} p={25} width={620} {...this.props.styled} >
          {this.props.modal}
        </Box>
      </Modal>
      </>
    );
  }
}

export default VerifiableCredentialBasic