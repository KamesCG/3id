/* --- Global Dependencies --- */
import React from "react";
import {
  IoIosHeart,
  IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie, IoIosInformationCircle,
} from 'react-icons/io';
/* --- Local Dependencies --- */
import { Avatar, BackgroundGradient, BackgroundImage, Box, Button, Flex, Image, Heading, Span, Paragraph } from "atoms";
import { Link } from 'molecules'
import { Modal, Panel } from 'components'
/* ------- Component ------- */
const shadowBlue = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4'
const shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f'

export default ({ alias, name, background, image, issuer, tagline, price, url }) => 
<Box card cardHover mt={20} p={0}>
  <Flex column >

    <Flex alignCenter p={20}>
      <Box borderNone flex={1}  flex={2} zIndex={20}>
        <Link mt={20} to={`/issuers/${alias}`}>
        <Heading fontSize={[4]} fontWeight={300}>
          {name}
        </Heading>
        </Link>
        <Paragraph fontSize={[1]}>
          {tagline}
        </Paragraph>

      </Box>
      <Box flex={2}>
        <Paragraph sm>
          <ul>
            <li>Reference: http://rapid-mesh.com/uri</li>
            <li>Context: http://rapid-mesh.com/uri/context</li>
          </ul>
        </Paragraph>
      </Box>
      <Box flex={2}>
        <Paragraph sm>
          <ul>
            <li>Usage: http://rapid-mesh.com/uri/usage</li>
            <li>Fields: 7</li>
          </ul>
        </Paragraph>
      </Box>
    </Flex>

    <Flex card borderBottom between alignBottom overflow='hidden' flex={1} maxHeight={70} textAlign='center' p={20}>
      <BackgroundGradient gradient='gray'/>
      <Flex between alignCenter fullWidth>
      { image &&
        <Link to={`/issuers/${alias}`}>
          <Flex alignCenter>
            <Span circle bg='white' mr={10} ><Avatar src={image} width={[25]}/></Span>
            <Span>{issuer}</Span>
          </Flex>
        </Link>
        }
  

        <Panel content={<CredentialTypeDetails/>} label='Credential Type Details'>
          <Flex alignCenter>
            <Button sm pointer tag bg='green' color='white' fontSize={[1]} fontWeight={500}>Details</Button>
          </Flex>
        </Panel>
      
      </Flex>
    </Flex>

  </Flex>
</Box>

const CredentialTypeDetails = props =>
<Box card>
  
</Box>