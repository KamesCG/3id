import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Flex, Span } from 'atoms'

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <Flex between>
        <Span fontSize={[1]}>	© {new Date().getFullYear()}, Business Name</Span>
        <Flex>
          <Link to='/account'>
            <Span hoverBold hoverUnderline fontSize={[1]}>Account</Span>
          </Link>
          <Link to='/about'>
            <Span hoverBold hoverUnderline fontSize={[1]} ml={10}>About</Span>
          </Link>
          <Link to='/privacy'>
            <Span hoverBold hoverUnderline fontSize={[1]} ml={10}>Privacy Policy</Span>
          </Link>
          <Link to='/support'>
            <Span hoverBold hoverUnderline fontSize={[1]} ml={10}>Support</Span>
          </Link>
        </Flex>
      </Flex>
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  background: #475580;
  box-shadow: 0px -3px 9px 0px rgba(93, 93, 93, 0.12), 0px 0px 5px 0px rgba(0, 0, 0, 0.31);
  color: #fffaff;
  bottom 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  width: 100%;
  z-index: 100
`

export default StyledFooter
