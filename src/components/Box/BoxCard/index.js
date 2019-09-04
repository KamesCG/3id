
/* --- Global Dependencies --- */
import idx from 'idx'
import React from "react";

/* --- Local Dependencies --- */
import {
  IoIosHeart,
  IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie, IoIosInformationCircle,
} from 'react-icons/io';
import { Avatar, BackgroundGradient, BackgroundImage, Box, Flex, Image, Heading, Span, Paragraph } from "atoms";
import { Link } from 'molecules'
import { Modal, Panel } from 'components'
/* ------- Component ------- */
const shadowBlue = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4'
const shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f'

import { GenerateImage } from 'helpers/ipfs'
/* ------- Component ------- */
export default ({ alias, name, background, image, description, role, tagline, email, url }) => 
!name ? <div></div>
: <Box cardHover  p={0}>
  <Flex column height='100%' >
    <Box card borderTop overflow='hidden' flex={1} maxHeight={50} textAlign='center' p={25}>
      <BackgroundGradient gradient='gray'/>
    </Box>

    <Box card borderNone flex={1} textAlign='center' p={15} py={20} zIndex={20}>
    { image &&
      <Box inlineBlock circle p='5px' overflow='hidden' mt={-90}>
        
        <Link mt={20} to={`/issuers/${alias}`}>
          <Span circle bg='white' ><Avatar src={GenerateImage(image)} width={120}/></Span>
        </Link>
      </Box>
      }
      <Link mt={20} to={`/issuers/${alias}`}>
      <Heading fontSize={[4]} fontWeight={300}>
        {name}
      </Heading>
      </Link>
      <Paragraph fontSize={[1]} mb={[25]}>
        {role}
      </Paragraph>
      <p>{description}</p>
      <Box mt={20}>
        <Heading sm thin>Contact</Heading>
        <Span color='white' fontSize={[2]}>	{email}</Span>
      </Box>
      <Flex column>
        <Panel content={<CredentialTypeDetails/>} label='Credential Type Details'>
          <Span pointer tag bg='green' color='white' fontSize={[1]} fontWeight={500}>	Details</Span>
        </Panel>
      </Flex>
    </Box>

    <Flex card borderBottom between alignBottom overflow='hidden' flex={1} maxHeight={70} textAlign='center' p={25}>
      <BackgroundGradient gradient='gray'/>
      <Flex between fullWidth>
        <Link>
          <Flex alignCenter>
            <IoIosInformationCircle />
            <Span ml={10}>Learn More</Span>
          </Flex>
        </Link>
        <Link>
          <Flex alignCenter>
          <IoIosHeart />
            <Span ml={10}>Love</Span>
          </Flex>
        </Link>
        
      </Flex>
    </Flex>
  </Flex>
</Box>


const CredentialTypeDetails = props =>
<Box card>
  
</Box>

{/* <Flex column card p={30}>
  <Avatar src={GenerateImage(image)} width={120}/>
  <Heading color='white' heavy fontSize={[3,3,4]}>
    {name}
  </Heading>
  <Span heavy fontSize={[2]}>	{job}</Span>
  <Span thin fontSize={[2]}>	{employer}</Span>
  <Flex between my={20}>
    {/* {
      verifications &&
      verifications.map( v => VerificationTypes(v.id, v.verified))
    }
  </Flex>
  <p>{description}</p>
  <Box mt={20}>
    <Heading sm thin>Contact</Heading>
    {/* <Span color='white' fontSize={[2]}>	{email}</Span>
  </Box>
</Flex> */}
