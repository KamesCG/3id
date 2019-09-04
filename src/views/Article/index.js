/* --- Global Dependencies --- */
import React from 'react'
import { SEO } from "components"
import stylesheet from 'theme/stylesheet.css'
import { Site } from 'layout'
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
      isL: true,
    }
  }
  
  // Mounted
  componentDidMount()
  {
    console.log(this.props, 'article')
  }
  // Updated
  componentDidUpdate()
  {

  }

  componentWillMount() {
    // if(this.props.pageContext.Body) {
    //   const Content = transpile(this.props.pageContext.Body)
    //   this.setState({
    //     Content
    //   })
    // }
  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    let { Content } = this.state
    const { Title, Introduction, Body, ImageHeader, ImageFeatured } = this.props.pageContext
    // console.log(Content)
    return(
      <div>
        <Site>
        <SEO title={Title} />
        <Flex column center py={50}>
          <BackgroundGradient gradient='blue' />
          <BackgroundImage src={ImageHeader} o={0.3}/>
          <Heading fontSize={[3]}>
            {Title}
          </Heading>
        </Flex>
        <Box>
          <Container>
            <Image src={ImageFeatured}/>
            {Introduction}
          </Container>
        </Box>
        </Site>
      </div>
    )
  }
}

export default ClassComponent