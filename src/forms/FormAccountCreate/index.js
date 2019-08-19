/* --- Global Dependencies --- */
import { connect } from 'react-redux'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { withFormik } from 'formik';

/* --- Local Dependencies --- */

/* --- Module Dependencies --- */
import Form from './component'

/* ------ Container State ------ */

/* --- Lifecycle --- */
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {
    
  }
})

/* -- Redux -- */
const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch, props) => ({

});

/* -- State Handler -- */
const StateHandler = withStateHandlers(
  () => ({
    data: undefined
  }),
  {
    setData: () => (value) => ({
      data: true,
    }),
  }
)

/* ------ Form Configuration ------ */
const FormSettings = {
  handleSubmit: (values, { props, ...form }) => {
    // Construct account registration objects from submitted form values.
    const account = {
      email: values.email,
      password: values.password
    }
    // const accountRegisterAPI = `${process.env.APPLICATION_URL}${process.env.APPLICATION_REGISTER}`
    const accountRegisterAPI = 'http://localhost:8080/account/register'
    // POST :: Send account registration details to backend API endpoint.
    fetch(accountRegisterAPI, {
      method: 'post',
      body: JSON.stringify(account)
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  },
  mapPropsToValues: props => ({
    email: '',
  }),
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = '*Required';
    }
    return errors;
  }
}

export default compose(
  // connect(mapStateToProps, mapDispatchToProps),
  withFormik(FormSettings),
  StateHandler,
  QueryLifecycle
)(Form)