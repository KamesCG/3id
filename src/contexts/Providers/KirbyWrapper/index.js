/* --- Global Dependencies --- */
import React from 'react'
import { KirbyProvider, KirbyContext, IKirbyContext, useSelector } from "@kirby-web3/parent-react";
import { EthereumParentPlugin } from "@kirby-web3/plugin-ethereum";
// Add this in your component file
console.log(KirbyProvider)
/* --- Local Dependencies --- */


/* ------ Component ------ */
const Web3Wrapper = props => {
  const KirbyContextNew = React.useContext(KirbyContext);
  const ethereumPlugin = KirbyContextNew.kirby.plugins.ethereum;

  const kirbyData = useSelector((state) => {
    return {
      readonly: state.ethereum.readonly,
      account: state.ethereum.account,
    };
  });
  return (
    <div>
      <div>web3: {kirbyData.readonly ? "read only" : "signer available"}</div>
      <div>account: {kirbyData.account}</div>
      <div>
        <button onClick={async () => ethereumPlugin.requestSignerWeb3()}>request signer web3 </button>
      </div>
      <div>{!kirbyData.readonly ? <button onClick={async () => requestSign()}>web3 sign</button> : null}</div>
    </div>
  )
}

const config = {
  dmz: {
    targetOrigin: "http://localhost:3002",
    iframeSrc: "http://localhost:3002",
  },
  ethereum: {
    readOnlyNodeURI: 'localhost:9999'
  },
};

const plugins = [new EthereumParentPlugin()];

const Provider = props =>
<>
<KirbyProvider plugins={plugins} config={config}>
  <Web3Wrapper />
</KirbyProvider>
</>


export default Provider