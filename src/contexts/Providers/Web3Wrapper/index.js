/* --- Global Dependencies --- */
import React from 'react'
import { ethers } from 'ethers';

/* --- Local Dependencies --- */
import { Emblems } from 'contracts'

export const Web3Context = React.createContext({

});

const networkRouting = async network => {
  switch (network) {
    case 'json':
      return window.ethers.providers.json;
    case 'test':
      return window.ethers.providers.test;
    case 'infura':
      return window.ethers.providers.infura;
    case 'metamask':
      return await new ethers.providers.Web3Provider(window.web3.currentProvider);
    default:
      return await ethers.getDefaultProvider('rinkeby');

  }
}

const Networks = {
  '1': 'Mainnet',
  '2': 'Ropsten',
  '3': 'Kovan',
  '4': 'Rinkeby',
}


/* ------ Component ------ */
class Web3Wrapper extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      address: undefined,
      network: undefined,
      networkName: undefined,
      isEthereumEnabled: false,
      isMetaMaskConnected: false,
      isMetaMaskInstalled: false,
      isMetaConnectInstaled: false,
      provider: undefined,
      // ...Web3Settings,
      
      setAddress: (address) => this.setState({
        address: address
      }),
      setMetaMaskConnection: (boolean) => this.setState({
        isMetaMaskConnected: boolean
      }),
      setMetaMaskInstalled: (boolean) => this.setState({
        isMetaMaskInstalled: boolean
      }),
      setProvider: (provider) => this.setState({
        provider: provider
      }),
      setNetwork: (network) => this.setState({
        network: network,
        networkName: Networks[4]
      }),
      enableMetaMask: async (handler, verify = false) => {
        try {
          await window.ethereum.enable();
          this.state.setMetaMaskConnection(true)
        } catch (error) {
          this.state.setMetaMaskConnection(false)
        }
      }
    }
  }

  async componentDidMount(){
    console.log('loading web3')
    const provider = await networkRouting('metamask');
    const signer = provider.getSigner();
    const EmblemsContract = new ethers.Contract(Emblems.networks['4'].address, Emblems.abi, signer)
    
    // if (typeof window !== `undefined`) {
      if(window.ethereum) {
        this.state.setAddress('0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE')
        this.state.setNetwork(window.ethereum.networkVersion)
      }

      if(window.ethereum.isMetaMask) {
        this.state.setMetaMaskInstalled(true)
      }
    // }

    // Set Account Information
    this.setState({
      isEthereumEnabled: true,
      provider: provider
    })

    // Smart Contract Initialization
    this.setState({
      contracts: {
        Emblems: {
          address: Emblems.networks['4'].address,
          abi: Emblems.abi,
          contract: EmblemsContract,
          name: 'Emblems'
        }
      }
    })
  }

  componentDidUpdate(prevProps) {
    if(this.state.metaMaskEnabled) this.props.setMetaMask(this.state.metaMaskEnabled)
    if(this.state.boxEnabled) this.props.setBox(this.state.boxEnabled)
  }
  
  render(){
    return(
      <Web3Context.Provider value={this.state}>
        {this.props.children}
      </Web3Context.Provider>
    )
  }
}


export default Web3Wrapper