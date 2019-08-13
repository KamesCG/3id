/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { Box, Flex, Heading, Span } from 'atoms'
/* --- React Component --- */
class BillingAmountDue extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
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
      <Flex column center boxShadow={1} borderRadius={15} gradient='white' p={20} width={[1,1, 0.3, 0.23]}>
        <Heading color='green' fontSize={[3,3,4]}>
          {this.props.amount}
        </Heading>
        <Span palette={['gray', 0]} fontSize={[1]}>{this.props.label}</Span>
      </Flex>
    )
  }
}

BillingAmountDue.defaultProps = {
  amount: '7',
  label: '1 Week Overdue',
}

export default BillingAmountDue