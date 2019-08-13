/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import Box from '../../atomic/atoms/Box'
import Flex from '../../atomic/atoms/Flex'


const VerifiableCredentialStyled = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 5px #9f9f9f;
  margin-bottom: 30px;
  padding: 20px 10px;
`

/* ------- Component ------- */
export default props => 
<VerifiableCredentialStyled>
  <Box textAlign='center'>
    <h3 style={{marginBottom: 10}}>{props.title}</h3>
    <p>{props.description}</p>
  </Box>
  <Flex column between>
    <h5 style={{marginBottom: 10}}>Metadata</h5>
    <p style={{fontSize: 14, marginBottom: 5, marginTop: 0}}>issuer: {props.issuer}</p>
    <p style={{fontSize: 14, marginBottom: 5, marginTop: 0}}>registry: {props.registry}</p>
  </Flex>
  <Flex column between>
    <h5 style={{marginBottom: 10}}>Claim(s)</h5>
    {
      props.decoded &&
      Object.keys(props.decoded).map( claim => <p style={{fontSize: 14, marginBottom: 5, marginTop: 0}} key={claim}> {claim}: {props.decoded[claim]}</p>)
    }
  </Flex>
</VerifiableCredentialStyled>


// Object.keys(props.decoded).forEach( key => {console.log(key, props.decoded[key]); return <p>{key}: {props.decoded[key]}</p>} )