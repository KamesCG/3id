/* --- Global Dependencies --- */
import React from 'react'
import idx from 'idx'
import { withCookies } from 'react-cookie';
import GraphQLClient from 'settings/graphql'

/* --- Local Dependencies --- */
import { ButtonFlat, Flex, Span } from 'atoms'
import { Web3Context } from 'contexts/Providers/Web3Wrapper'

/* --- React Component --- */
class LoginEthereum extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address: this.props.address,
      challenge: null,
      JWT: idx(this.props, _=>_.cookies.cookies.jwt),
      signature: null,
      provider: this.props.provider,
      isAuthenticated: false,
      isChecked: false,
    }
    this.logout = this.logout.bind(this);
    this.getChallenge = this.getChallenge.bind(this);
    this.signChallenge = this.signChallenge.bind(this);
    this.verifyJWT = this.verifyJWT.bind(this);
    this.verifySignatureJWT = this.verifySignatureJWT.bind(this);

  }

  async logout () {
    console.log(this.props.cookies)
    this.props.cookies.remove('jwt')
    console.log(this.props.cookies)
    this.setState({
      isAuthenticated: false,
      isChecked: false,
      challenge: undefined,
      JWT: undefined,
      signature: undefined
    })
  }
  
  async verifyJWT () {
    const { JWT } = this.state;
    const res = await fetch(
      `http://dapp.rapid-mesh.com/v1/verifyJWT`,
      {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${JWT}`,
        }
      }
    );
    const permissions = await res.json()
    if (res.status === 200 && permissions) {
      if(permissions.exp - permissions.iat > 0) {
        this.setState({
          isAuthenticated: true,
          isChecked: true,
          permissions: permissions
        })
      } else {
        this.setState({
          isChecked: true,
          permissions: permissions
        })
      }
    } else {
      this.setState({
        isChecked: true,
      })
    }
  }

  async getChallenge () {
    const { address } = this.state;
    const res = await fetch(
      `http://dapp.rapid-mesh.com/auth/${address.toLowerCase()}`
    );
    this.setState({ challenge: await res.json() });
  }

  async signChallenge () {
    const { address, challenge, provider } = this.state;
    console.log(this.state, 'provider')
    const signature = await provider.send('eth_signTypedData', [challenge, address])
    this.setState({ signature })
  }
  
  async verifySignatureJWT () {
    const { challenge, signature } = this.state;
    const res = await fetch(`http://dapp.rapid-mesh.com/jwt/${challenge[1].value}/${signature}`);
    const jwt = await res.text();
    if (res.status === 200 && jwt) {
      this.setState({
        isAuthenticated: true,
        JWT: jwt
      })
      // CookieSave(this.props.cookies, jwt)
      GraphQLClient.setHeaders({
        authorization: `Bearer ${jwt}`
      })
    }
  };


  componentDidMount() 
  {

    if (!this.state.isChecked && this.state.JWT) {
      this.verifyJWT()
    } else {
      this.getChallenge()
    }

  }

  /* Did Update */
  componentDidUpdate()
  {
    if(this.state.signature && !this.state.isAuthenticated) {
      this.verifySignatureJWT()
    }
    // if (!this.state.isChecked && this.state.JWT) {
    //   this.verifyJWT()
    // }
  }

  render(){
    return(
      this.state.isAuthenticated
      ? <Flex column align='flex-end'>
          <Span fontSize={[1]} fontWeight={700} >{this.state.address}</Span>
          <Span onClick={this.logout} cursor='pointer' fontSize={[1]}>	Logout</Span>
        </Flex>
      : <ButtonFlat palette='blue' onClick={this.signChallenge}>Login</ButtonFlat>
    )
  }
}

const CookieSave = (cookies, jwt) => {
  const cookieExpires = new Date();
  cookieExpires.setDate(cookieExpires.getDate() + 7);
  cookies.set('jwt', jwt, {
    path: '/', 
    expires: cookieExpires
  })
}


const Login = props => 
<Flex>
  {console.log(props, 'cokporp')}
  <Web3Context.Consumer>
    { web3 => (
      web3.address && web3.provider
      ? <LoginEthereum address={web3.address} provider={web3.provider} cookies={props.cookies} />
      : <Span fontSize={1}>Enable Web3</Span>
    )}
  </Web3Context.Consumer>
</Flex>

export default withCookies(Login)