/* --- Global Dependencies --- */
import React from 'react'
// import box from '3box/dist/3box'
let box;
if (typeof window !== `undefined`) {
  box = require('3box/dist/3box')
}
// .idUtils
// .verifyClaim ⇒ Object
// .isSupportedDID(did) ⇒ * | boolean
// .isClaim(claim, opts) ⇒ Promise.<boolean>
// .getProfile(address, opts) ⇒ Object
// .getProfiles(address, opts) ⇒ Object
// .getSpace(address, name, opts) ⇒ Object
// .getThread(space, name, firstModerator, members, opts) ⇒ Array.<Object>
// .getThreadByAddress(address, opts) ⇒ Array.<Object>
// .getConfig(address, opts) ⇒ Array.<Object>
// .listSpaces(address, opts) ⇒ Object
// .profileGraphQL(query, opts) ⇒ Object
// .getVerifiedAccounts(profile) ⇒ Object
// .openBox(address, ethereumProvider, opts) ⇒ Box
// .isLoggedIn(address) ⇒ Boolean


/* ------ Component ------ */
export const BoxContext = React.createContext({});

class BoxProvider extends React.Component {
  constructor(props){
    super(props)
    const address = window.ethereum.selectedAddress
    this.state  = {
      profile: undefined,
      utilities: undefined,
      spaces: undefined,
      threads: undefined,
      entities: {},
      
      // Open Box
      open: async () => {
        const boxProfile = await box.openBox(address, window.web3.currentProvider)
        this.setState({
          utilities: boxProfile
        })
      },
      logout: async () => {
        await this.state.utilities.logout()
        this.setState({
          utilities: undefined
        })
      },
      // Space
      getSpace: async (name) => {
        const boxProfile = await this.state.utilities.getSpace(address, name)
        this.setState({
          box: boxProfile
        })
      },
      getThread: async (name) => {
        const boxProfile = await this.state.utilities.getThread(address, name)
        this.setState({
          box: boxProfile
        })
      },

      // Profile 
      getProfile: async (address) => {
        const profile =  await box.getProfile(address)
        this.setState({
          profile: profile
        })
      },
      lookupProfile: async (address) => {
        const profile =  await box.getProfile(address)
        this.setState({
          entities: {
            ...this.state.entities,
            [address]: profile
          }
        })
      }

    }
  }

  async componentDidMount(){
    this.state.getProfile(window.ethereum.selectedAddress)
  }

  componentDidUpdate(prevProps) {
    console.log(this.state, 'box prvd')
  }
  
  render(){
    return(
      <BoxContext.Provider value={this.state}>
        {this.props.children}
      </BoxContext.Provider>
    )
  }
}

export default BoxProvider
export const BoxConsumer = ({ children }) =>
<BoxContext.Consumer>
  {
    box => (
    <>
      {
        children && Array.isArray(children)
        ? children.map( child => React.cloneElement(child, {box}))
        : React.cloneElement(children, {box})
      }
    </>
    )
}
</BoxContext.Consumer>