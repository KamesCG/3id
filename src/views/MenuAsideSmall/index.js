/* --- Global Dependencies --- */
import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Box, Flex, Span } from "atoms";
import { Items } from 'static/menu'
import { Popover } from 'components'
/* ------- Styled Component ------- */

const LinkStyled = styled(Link)`
  color: inherit;
  font-size: 16px;
  font-weight: normal;
  margin-left: 8px;
  text-decoration: none;
`
const ChildContainer = styled(Box)`
  background: #31314e;
  color: #FFF;
  padding: 10px 42.5px;

  & .grandchild {
    opacity: 0.75;
  }

  & .grandchild:hover {
    opacity: 1;
  }

  &:hover {
    background: #1b1b28;
    opacity: 1;

    & .child {
      opacity: 1;
    }
  
  }

  & ul {
    margin: 0;
    margin-top: 10px;
    padding-left: 25px;
  }

  & li {
    opacity: 0.75;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 7px;

    &:hover {
      opacity: 1;
    }
  }
`
const LinkStyledChild = styled(Link)`
  color: inherit;
  display: block;
  font-size: 14px;
  margin-left: 8px;
  text-decoration: none;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`

const StyledMenuItem = styled(Flex)`
  opacity: 0.75;
  width: 100%;
  &:hover {
    background: #1b1b28;
    opacity: 1;
  }
`

const MenuItem = ({ children, label, to,  icon }) => {
const [isOpen, setOpen] = useState(false);
return (
  <Flex center column width={1}>
    <StyledMenuItem center py={10} px={10} >
      <Link to={to}>
        <Span fontSize={[3]}>	{icon && icon}</Span>
      </Link>
      {/* <LinkStyled to={to}>{label}</LinkStyled> */}
      { children &&
        <Popover position='right' content={<ChildrenPopover children={children} />} >
          <Span pointer width={30} alignSelf='flex-end' ml='10px' top={-3}>
            <Span fontSize={[1]}>▶</Span>
          </Span>
      </Popover>
      }
    </StyledMenuItem>
  </Flex>
)}

const ChildrenPopover = ({ children }) =>
<>
{
  children.map( c =>
  <ChildContainer>
    <Flex alignCenter mb='8px'>
      {c.icon && c.icon}
      <LinkStyledChild className='child' to={c.to}>
        {c.label}
      </LinkStyledChild>
    </Flex>
      <Flex column>
        { c.children &&
          <Flex column ml='8px'>
            {c.children.map( i =>
              <Link to={i.to}>
                <Flex alignCenter className='grandchild' my='4px'>
                  {i.icon}
                  <Span fontSize={1} ml='8px'>{i.label}</Span>
                </Flex>
              </Link>
            )}
          </Flex>
        }
      </Flex>
  </ChildContainer>
  )}
</>

/* ------- Component ------- */
export default props => 
<Flex column overflow='auto' height='90%' >
  {
    Items.map( item => <MenuItem {...item}/>)
  }
</Flex>

