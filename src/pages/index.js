/* --- Global Dependencies --- */
import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'

/* --- Local Dependencies --- */
import stylesheet from '../theme/stylesheet.css'
import {
  Flex, Box, Button, Image,
  Heading, HorizontalRule, Paragraph, Span, 
  BackgroundImage, BackgroundGradient
} from 'atoms'

import { beauty, backpack, lifestyle, watch, research, coder, network } from 'assets/images' 
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ethereum`, `application`, `react`]} />
    <Hero/>
    <Features/>
    <Details/>
    <FAQ/>
  </Layout>
)

/**
 * @title Product Hero
 * @description Highlight product details 
 */
const Hero = props =>
<Box py={[120, 160, 180, 230]} >
  <BackgroundGradient gradient='blue'/>
  <BackgroundImage src={network} opacity={0.47} ratio={0.35} />
  <Container>
    <Flex center column >
      <Heading color='white' fontSize={[3,3,6,7]} textShadow={1} >
        Get Connected
      </Heading>
      <Paragraph color='white' fontSize={[2,2,3]} textShadow={2}>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Paragraph>
    </Flex>
  </Container>
</Box>

/**
 * @title Product Features
 * @description The product features should highlight all the specific features of the product
 */

const Features = props =>
<Box id="features" py={[60, 60, 120, 180]} >
<Container>
  <Flex between>
    <Box width={[1,1, 0.3]} >
      <Heading color='blue' fontSize={[2,2,3]}>
        Decentralized Feature
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.
      </Paragraph>
    </Box>

    <Box width={[1,1, 0.3]} >
    <Heading color='blue' fontSize={[2,2,3]}>
        Decentralized Feature
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.
      </Paragraph>
    </Box>

    <Box width={[1,1, 0.3]} >
    <Heading color='blue' fontSize={[2,2,3]}>
        Decentralized Feature
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.
      </Paragraph>
    </Box>
  </Flex>

  <Flex between mt={[40,40, 120]} >
    <Box width={[1,1, 0.3]} >
    <Heading color='blue' fontSize={[2,2,3]}>
        Decentralized Feature
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.
      </Paragraph>
    </Box>

    <Box width={[1,1, 0.3]} >
    <Heading color='blue' fontSize={[2,2,3]}>
        Decentralized Feature
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.
      </Paragraph>
    </Box>

    <Box width={[1,1, 0.3]} >
    <Heading color='blue' fontSize={[2,2,3]}>
        Decentralized Feature
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent.
      </Paragraph>
    </Box>
  </Flex>
  </Container>
</Box>

/**
 * @title Product Details
 * @description The product details should contain the what and why of the specific product.
 */
const Details = props =>
<Flex id="details" column >
  {/* Row One */}
  <Flex height={['50vh']} >
    <Box width={[1,1,1, 0.5]} >
      <BackgroundGradient gradient='blue'/>
      <BackgroundImage src={research}/>
    </Box>
    <Flex column justify='center' color='white' p={[30,30, 70, 120]} width={[1,1,1, 0.5]} >
      <BackgroundGradient gradient='blue'/>
      <Heading color='white' fontSize={[4,4,5]} textShadow={'light'}>
        Connect Globally
      </Heading>
      <Paragraph fontSize={[1,1,2]} textShadow={'light'}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Paragraph>
    </Flex>
  </Flex>

  {/* Row Two */}
  <Flex height='50vh' >
    <Flex column justify='center' color='white' p={[30,30, 70, 120]} width={[1,1,1, 0.5]} >
      <BackgroundGradient gradient='blue'/>
      <Heading color='white' fontSize={[4,4,5]} textShadow={'light'}>
        Powerful Features
      </Heading>
      <Paragraph fontSize={[1,1,2]}>
        Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Paragraph>
    </Flex>
    <Box width={[1,1,1, 0.5]} >
      <BackgroundGradient gradient='blue'/>
      <BackgroundImage src={coder}/>
    </Box>
  </Flex>

</Flex>

const FAQ = props =>
<Box id="product-questions" py={[100]} >
  <Container>
    <Heading fontSize={[4,4,5]} mb={70} >
      Frequently Asked Questions
    </Heading>
    {
      Questions.map(question => <QuestionAnswer {...question}/>)
    }
  </Container>
</Box>


const Slideshow = props =>
<Box height='70vh' >
  <BackgroundImage src={backpack}/>
</Box>
export default IndexPage

const QuestionAnswer = ({ question, answer }) =>
<>
  <Heading fontSize={[3]}>
    {question}
  </Heading>
  <Paragraph fontSize={[1]}>
    {answer}
  </Paragraph>
  <HorizontalRule borderColor='green' my={35}/>
</>

const Questions = [
  {
    question: 'Question Number One',
    answer: ' Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Question Number Two',
    answer: ' Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Question Number Three',
    answer: ' Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Question Number Four',
    answer: ' Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Question Number Five',
    answer: ' Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Question Number Six',
    answer: ' Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas suscipit ex nec interdum consequat. Morbi sed magna ut metus interdum finibus vel at nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
]