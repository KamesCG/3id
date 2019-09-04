/* --- Global Dependencies --- */
import React from "react"
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import LayoutProvider from 'context/Providers/LayoutWrapper'
import BoxProvider from 'context/Providers/BoxProvider'
/* --- Local Dependencies --- */
import themeSettings from 'theme/settings.js'

/* --- Constants --- */

class Providers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  
  // Mounted
  componentDidMount()
  {
    const configureStore = require('store/configuration').default
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
            <LayoutProvider>
              <BoxProvider>
                {element}
              </BoxProvider>
            </LayoutProvider>
          </ThemeProvider>
      </Provider>
    )
  }
}

export default ({ element }) => <Providers element={element}/>