/* --- Global Dependencies --- */
import React from 'react'
import Layout from "components/layout"
import SEO from "components/seo"
import stylesheet from 'theme/stylesheet.css'

/* --- Local Dependencies --- */
import { BackgroundImage, BackgroundGradient, Box, Flex, Image, Heading, Container  } from 'atoms'

// const transpile = async () => {
//   const jsx = await mdx(content)
//   return jsx
// }


/* --- React Component --- */
class ClassComponent extends React.Component {
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
    const { name, body, did } = this.props.pageContext
    // console.log(Content)
    return(
      <div>
        <Layout>
        <SEO title={name} />
        <Flex color='white' column center py={50}>
          <BackgroundGradient gradient='blue' />
          <Heading fontSize={[5]}>
            {name}
          </Heading>
          <Heading fontSize={[2]}>
            {did}
          </Heading>
        </Flex>
          <Container py={[20, 40, 60]} width={[1,1, 650]}>
            {body}
          </Container>
        </Layout>
      </div>
    )
  }
}

export default ClassComponent