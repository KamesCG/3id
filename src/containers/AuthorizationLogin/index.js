/* --- External Dependencies --- */
import idx from 'idx'
import { connect } from 'react-redux';
import { compose, lifecycle } from "recompose";

/* --- Local Dependencies --- */
import Component from './component';
import { authLoginWithAuthorization } from 'storeRedux/departments/actions'

/* ------- React Container ------- */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
  {
    componentDidMount()
    {
   
    },
    componentDidUpdate(prevProps)
    {
   
    }
  });

const mapStateToProps = (state) => ({
  account: state.authentication && state.authentication.user,
  isLoggedIn: state.authentication && state.authentication.loggedIn
})

const mapDispatchToProps = (dispatch, props) => ({
  authLogin: () => dispatch(authLoginWithAuthorization({
    metadata: {
      providerSelection: props.providerSelection
    }
  })),
})



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
