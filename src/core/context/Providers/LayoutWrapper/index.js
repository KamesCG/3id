/* --- Global Dependencies --- */
import React from 'react'
import withSizes from 'react-sizes'

/* --- Local Dependencies --- */
// import { LayoutContext } from 'context/Layout' 

const LayoutSettings = {

};

export const LayoutContext = React.createContext({

});


// Helpers
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 720,
})

/* --- Component --- */
class Contexts extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      isMobile: props.isMobile,
      isAsideExpanded: true,
      toggleAsideExpanded: () => this.setState({
        isAsideExpanded: !this.state.isAsideExpanded
      }),
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.isMobile !== prevProps.isMobile)
    this.setState({
      ...this.state,
      isMobile: this.props.isMobile,
    })
  }

  componentDidMount(){

  }
  
  render(){
    return(
      <LayoutContext.Provider value={this.state}>
        {this.props.children}
      </LayoutContext.Provider>
    )
  }
}

export default withSizes(mapSizesToProps)(Contexts)