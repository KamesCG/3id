/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { LayoutContext } from 'context/Layout'

/* ------ Component ------ */
export default props => (
<LayoutContext.Consumer>
    {layout => (
        <div>{props.children}</div> 
    )}
</LayoutContext.Consumer>
)