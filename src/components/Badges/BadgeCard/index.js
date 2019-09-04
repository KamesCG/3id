/* --- Global Dependencies --- */
import React from "react";
import {
  IoIosHeart,
  IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie, IoIosInformationCircle,
} from 'react-icons/io';
/* --- Local Dependencies --- */
import { CentsToDollars } from 'helpers/money'
import { Avatar, BackgroundGradient, BackgroundImage, Box, Flex, Image, Heading, Span, Paragraph } from "atoms";
import { Link } from 'molecules'
import { Modal, Panel } from 'components'
/* ------- Component ------- */
const shadowBlue = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4'
const shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f'

export default ({ alias, name, background, image, thumbnail, tagline, price, url }) => 
<Box cardHover  p={0}>
  <Flex column height='100%' >
    <Box card borderTop overflow='hidden' flex={1} maxHeight={50} textAlign='center' p={25}>
      <BackgroundGradient gradient='blue'/>
    </Box>

    <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
    {image &&
      <Box inlineBlock circle boxShadow={shadowBlue} p={45} overflow='hidden' gradient='white' mt={-90}>
        {/* <BackgroundGradient gradient='blue'/>
        <BackgroundImage src={background} opacity={0.2}/> */}
        <Link mt={20} to={`/store/product/${alias}`}>
          <Span circle bg='white' ><Image src={image} width={[120]}/></Span>
        </Link>
      </Box>
      }
      <Link mt={20} to={`/store/product/${alias}`}>
      <Heading fontSize={[4]} fontWeight={300}>
        {name}
      </Heading>
      </Link>
      <Paragraph fontSize={[1]} mb={[25]}>
        {tagline}
      </Paragraph>
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