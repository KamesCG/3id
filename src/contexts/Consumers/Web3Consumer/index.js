/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { Web3Context } from 'contexts/Providers/Web3Wrapper'

/* ------ Component ------ */
export default props => (
<Web3Context.Consumer>
    {data => <div>{props.children}</div> }
</Web3Context.Consumer>
)