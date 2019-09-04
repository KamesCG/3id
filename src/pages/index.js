/* --- Global Dependencies --- */
import React from "react"

/* --- Local Dependencies --- */
import stylesheet from 'theme/stylesheet.css'
import { iconBilling, iconCampaign, iconDirectory } from 'assets/images'
import { bgDots, bgShadow, iphoneCut, devices, videoThumbnail } from 'assets/images' 
import {
  Flex, Box, Button, ButtonFlat, Image, Container,
  Heading, HorizontalRule, Paragraph, Span, 
  BackgroundImage, BackgroundGradient
} from 'atoms'

import { FormCustomerCapture } from 'forms'
import { SEO } from "components"
import { Site } from 'layout'

const IndexPage = () => (
  <Site>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ProductHero/>
    {/* <ProductFeatures/> */}
  </Site>
)

/**
 * @title Product Hero
 * @description Highlight product details 
 */
const ProductHero = props =>
<Box pt={[120, 160, 50]} >
  <BackgroundGradient gradient='purpink' gradientDir={180}/>
  <BackgroundImage src={bgShadow} opacity={1} ratio={0.35} />
  <BackgroundImage src={bgDots} opacity={0.7} ratio={0.35} />
  <Container width={[1020]} py={[200]}>

    <Flex center column align='center'>
        <Heading color='white' level={5} fontSize={[4,4,5]} fontWeight={300} mb={[20,20,36]} textAlign='center' >
          Decentralized Application<br/>
          Frontend and Backend
        </Heading>
        <Flex mt={[20, 30, 40]}>
          <ButtonFlat sm palette='green' mr={15}>Documentation</ButtonFlat>
          <ButtonFlat sm palette='blue'>Dashboard</ButtonFlat>
        </Flex>
    </Flex>

  </Container>
</Box>

/**
 * @title Product Features
 * @description The product features should highlight all the specific features of the product
 */

const ProductFeatures = props =>
<Box id="product-features" py={[60, 60, 120, 130]} >
<Container width={[1,1, 980, 1220]}>
  <Flex center column mb={[20, 30, 50]}>
    <Heading fontSize={[3,3,4,5]}>
      Service Business Lead Generation
    </Heading>
    <Paragraph fontSize={[2]}>
      Start driving customers directly to your phone today. Handle business and we'll deliver results.
    </Paragraph> 
  </Flex>
  <Flex between>
    <ServiceFeatured
      icon={iconCampaign}
      title='Direct Calls'
      description='Direct calls to schedule appointment, reserve a rental or request services. Forwarding to multiple numbers.'
    />
    <ServiceFeatured
      icon={iconBilling}
      title='Simple Billing'
      description='Only pay for incoming calls with potential customers. View simple records of who, when and how long.'
    />
    <ServiceFeatured
      icon={iconDirectory}
      title='Managed Accounts'
      description='Set a budget and start listening for incoming calls. We manage the day-to-day of lead generation.'
    />
  </Flex>

  <Flex between mt={[30, 50]}>
    <ServiceFeatured
      icon={iconCampaign}
      title='Amazin Product'
      description='Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.'
    />
    <ServiceFeatured
      icon={iconBilling}
      title='Simple Billing'
      description='Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.'
    />
    <ServiceFeatured
      icon={iconDirectory}
      title='Unlimited Campaigns'
      description='Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.'
    />
  </Flex>
  </Container>
</Box>

const CustomerRegistration = ({ title, tagline}) =>
<Box gradient='gray' gradientDir={-90} py={[50, 100]}>
  <BackgroundImage src={bgShadow} opacity={0.7} ratio={0.35} />
  <BackgroundImage src={bgDots} opacity={1} ratio={0.35} />
  <BackgroundImage src={bgDots} opacity={1} ratio={0.35} />
  <Container width={[1,1, 760]}>
    <Flex center column>
      <Heading fontSize={[4,4,5]}>
        {title}
      </Heading>
      <Paragraph fontSize={[2,2,3]}>
        {tagline}
      </Paragraph>
    </Flex>
    <FormCustomerCapture/>
  </Container>
</Box>

const ServiceFeatured = ({ icon, title, description, styled }) =>
<Flex width={[1,1, 0.3]} {...styled}>
  <Box mr={15}>
    <Flex column center gradient='blueOcean' borderRadius={20} mb={15} height={60} width={60}><Image src={icon} width={30}/></Flex>
  </Box>
  <Flex column>
    <Heading fontSize={[2,2,3]} fontWeight={500} mb={15}>
      {title}
    </Heading>
    <Paragraph fontSize={[1,1,2]} fontWeight={300}>
      {description}
    </Paragraph>
  </Flex>
</Flex>

const CustomerVideo = props =>
<Box py={[50, 80, 140]}>
  <BackgroundGradient gradient='blueOcean' gradientDir={180}/>
  <BackgroundImage src={bgShadow} opacity={1} ratio={0.35} />
  <BackgroundImage src={bgDots} opacity={0.7} ratio={0.35} />

  <Flex center column>
    <Image src={videoThumbnail} boxShadow={5} border='1px solid #FFF' borderRadius={8} width={[340, 540, 620]}/>
  </Flex>
</Box>

const SalesPitch = () =>
<Box p={30} my={50}>
  <Container width={[1,1, 560, 720]}>
    <Heading color='red' fontSize={[4,4,5]}>
      Need More Clients and Customers?
    </Heading>
      <Paragraph fontSize={[2]}>
        <strong>Imagine an extra 5, 10 or even 30 extra incoming calls time per day with potential customers?</strong>
        <br/>Calls with people already searching for your service or product and credit/debit card in hand.<br/>What could that do for the businesses?
      </Paragraph>

      <Paragraph fontSize={[2]}>
        If an extra 5 to an 100+ incoming calls per week would make a drastic difference for your businesses register with <strong>Horizin Leads</strong> for a 100% risk-free trial. All qualified clients receive a risk free trial ($125 credit) plus free account setup ($300 value) which includes multiple forwarding numbers, managed advertising accounts and incoming leads starting within 72 hours or less.
      </Paragraph>
    <Heading color='red' fontSize={[3,3,4]} mb={15} mt={35} >
      Tried search engine optimization without results?
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit, tortor erat finibus augue, non semper magna dui eu lorem. Sed ullamcorper, nunc eget aliquam efficitur, neque tortor viverra mi, ut venenatis lorem tellus a lacus. Mauris ultrices malesuada enim, eget pharetra mi vehicula id.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Heading color='red' fontSize={[3,3,4]} mb={15} mt={35} >
      Focus On Your Business
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <ul>
      <li>Travel & Tourism</li>
      <li>Construction & Contractors</li>
      <li>Finance & Taxes</li>
      <li>Plumbing & Pest</li>
      <li>Any Service based Business</li>
    </ul>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Heading color='red' fontSize={[3,3,4]} mb={15} mt={35} >
      Automated Lead Generation
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
  </Container>
</Box>

const Deliverables = () =>
<Box p={30} my={50}>
  <Container width={[1,1, 560, 720]}>
    <Heading color='red' fontSize={[4,4,5]}>
      Online Call Forwarding Campaigns
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat.
    </Paragraph>
    <Paragraph fontSize={[1]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit, tortor erat finibus augue, non semper magna dui eu lorem. Sed ullamcorper, nunc eget aliquam efficitur, neque tortor viverra mi, ut venenatis lorem tellus a lacus. Mauris ultrices malesuada enim, eget pharetra mi vehicula id.
    </Paragraph>
    <Paragraph fontSize={[1]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>

    <Heading color='red' fontSize={[3,3,4]} mb={15} mt={35} >
      Straightforward Billing & Monthly Breakdowns
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit, tortor erat finibus augue, non semper magna dui eu lorem. Sed ullamcorper, nunc eget aliquam efficitur, neque tortor viverra mi, ut venenatis lorem tellus a lacus. Mauris ultrices malesuada enim, eget pharetra mi vehicula id.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>

    <Heading color='red' fontSize={[3,3,4]} mb={15} mt={35} >
      Only Pay for What You Use
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <ul>
      <li>Travel & Tourism</li>
      <li>Construction & Contractors</li>
      <li>Finance & Taxes</li>
      <li>Plumbing & Pest</li>
      <li>Any Service based Business</li>
    </ul>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Heading color='red' fontSize={[3,3,4]} mb={15} mt={35} >
      Automated Lead Generation
    </Heading>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
    <Paragraph fontSize={[2]}>
      Nullam semper vulputate dolor sed ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus vitae sapien vitae feugiat. Nullam suscipit convallis elit. Duis consequat, erat sit amet viverra blandit.
    </Paragraph>
  </Container>
</Box>

export default IndexPage
