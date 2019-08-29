/* --- Global Dependencies --- */
import React from "react"
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

/* --- Local Dependencies --- */
import themeSettings from 'theme/settings.js'
import { Web3Context } from 'contexts/Providers/Web3Wrapper'
import Web3Wrapper from 'contexts/Providers/Web3Wrapper'
/* --- Configuration --- */
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
    const configureStore = require('storeRedux/configuration').default
    const storeState = configureStore();
    this.setState({
      isLoading: false,
      store: {...storeState}
    })
  }
  // Updated
  componentDidUpdate()
  {

  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    const { isLoading, store } = this.state
    const { element } = this.props
    return(
      isLoading ? null :
      <Provider store={store.store}>
          <ThemeProvider theme={themeSettings}>
            <Web3Wrapper>
              {element}
            </Web3Wrapper>
          </ThemeProvider>
      </Provider>
    )
  }
}

export default ({ element }) => <ClassComponent element={element}/>