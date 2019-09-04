/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { Flex, Span } from 'atoms'
import { Web3Context } from 'context/Providers/Web3Wrapper'

export default props =>
<>
<Web3Context.Consumer>
{ web3 => (
  <>
    <Flex mr={10}>
      <Span fontSize={[1]} mr={15}>Ethereum: {
        web3.isEthereumEnabled
        ? <Span color='green' fontSize={[1]}>Connected</Span>
        : <Span color='red' fontSize={[1]}>Disconnected</Span>
        }
      </Span>
      <Span fontSize={[1]} mr={15}>Network: <Span color='orange' fontSize={[1]}>	{web3.networkName}</Span></Span>
      <Span fontSize={[1]}>MetaMask: {
        web3.isMetaMaskConnected
        ? <Span color='green' fontSize={[1]}>Connected</Span>
        : web3.isMetaMaskInstalled 
          ? <Span color='green' onClick={web3.enableMetaMask} fontSize={[1]}>Disconnected</Span>
          : <Span color='green' fontSize={[1]}><a href="https://metamask.io/" target="_blank">Install</a></Span>
        }
      </Span>
    </Flex>
  </>
  )
}
</Web3Context.Consumer>
</>