/* --- Global Dependencies --- */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from "components/layout"
import SEO from "components/seo"
import stylesheet from 'theme/stylesheet.css'

/* --- Local Dependencies --- */
import { BackgroundImage, BackgroundGradient, Box, Flex, Image, Heading, Container  } from 'atoms'

/* --- React Component --- */
class Documentation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  
  // Mounted
  componentDidMount()
  {
    console.log(this.props, 'issuer')
  }
  // Updated
  componentDidUpdate()
  {

  }

  componentWillMount() {

  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    let { Content } = this.state
    const { title, tagline, body } = this.props.pageContext
    return(
      <div>
        <Layout>
        <SEO title={title} />
        <Flex color='white' column center py={50}>
          <BackgroundGradient gradient='blue' />
          <Heading fontSize={[5]}>
            {title}
          </Heading>
          <Heading fontSize={[2]}>
            {tagline}
          </Heading>
        </Flex>
          <Container py={[20, 40, 60]} width={[1,1, 650]}>
            <ReactMarkdown source={body} />
          </Container>
        </Layout>
      </div>
    )
  }
}

export default Documentation