/* --- Global Dependencies --- */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Popover, { ArrowContainer }  from 'react-tiny-popover'

/* --- Local Dependencies --- */
import themeSettings from 'theme/settings.js'

export default ({ content, position, children, isOpenParent, onHover }) => {
const [isOpen, setIsOpen] = useState(isOpenParent);
const openToggle = () => setIsOpen(isOpen ? false : true)

return (
  <Popover
    containerClassName='popover'
    isOpen={isOpen}
    // contentLocation={{ bottom: 0, left: 0 }}
    position={position || ['bottom', 'right',  'top']}
    onClickOutside={openToggle}
    content={({ position, targetRect, popoverRect, ...props }) => (
      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={'blue'}
          arrowSize={10}
          arrowStyle={{ opacity: 0.47 }}
      >
        <ThemeProvider theme={themeSettings}>
          {content}
        </ThemeProvider>
    </ArrowContainer>)}
    // content={content}
    >
    <div onMouseEnter={onHover ? openToggle : null} onClick={openToggle} style={{zIndex: 1000}}>
        {children}
    </div>
  </Popover>
  )
}