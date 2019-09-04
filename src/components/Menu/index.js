/* --- Global Dependencies --- */
import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Box, Flex, Span } from "atoms";

/* ------- Styled Component ------- */

const LinkStyled = styled(Link)`
  color: inherit;
  font-size: 16px;
  font-weight: normal;
  margin-left: 8px;
  text-decoration: none;
`

const ChildContainer = styled(Box)`
  padding: 10px 42.5px;

  & .grandchild {
    opacity: 0.75;
  }

  & .grandchild:hover {
    opacity: 1;
  }

  &:hover {
    background: rgba(0,0,0, 0.035);
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
  &:hover {
    background: rgba(0,0,0, 0.035);
    opacity: 1;
  }
`

const MenuItem = ({ children, label, to,  icon }) => {
const [isOpen, setOpen] = useState(false);
return (
  <Flex column>
    <StyledMenuItem align='center' py={10} px={10} >
      {icon && icon}
      <LinkStyled to={to}>{label}</LinkStyled>
      { children &&
        <Span pointer width={30}  alignSelf='flex-end' ml='auto' onClick={()=>setOpen(!isOpen)}>
          <Span fontSize={[1]} transform={isOpen ? 'rotate(90deg)' : ''}>{isOpen? '↴' : '▶'}</Span>
        </Span>
      }
    </StyledMenuItem>
    { isOpen && children &&
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
      </ChildContainer>)
    }
  </Flex>
)}

/* ------- Component ------- */
export default ({ items }) => 
<Flex column overflow='auto' height='90%' >
  {
    Array.isArray(items) && items.length > 0 &&
    items.map( item => <MenuItem {...item}/>)
  }
</Flex>

