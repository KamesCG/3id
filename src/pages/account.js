/* --- Global Dependencies --- */
import React from "react"
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('../views/Account'),
  loading() {
    return <div>Loading...</div>
  }
});

class MyComponent extends React.Component {
  render() {
    return <LoadableBar/>;
  }
}

export default MyComponent