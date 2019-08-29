/* --- Global Dependencies --- */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Popover, { ArrowContainer }  from 'react-tiny-popover'

/* --- Local Dependencies --- */
import themeSettings from 'theme/settings.js'

export default ({ content, position, children }) => {
const [isOpen, setIsOpen] = useState(false);
const openToggle = () => setIsOpen(isOpen ? false : true)

return (
  <Popover
    containerClassName='popover'
    isOpen={isOpen}
    position={['bottom', 'left', 'right',  'top']}
    onClickOutside={openToggle}
    content={content}
    >
    <div onClick={openToggle} style={{zIndex: 1000}}>
        {children}
    </div>
  </Popover>
  )
}