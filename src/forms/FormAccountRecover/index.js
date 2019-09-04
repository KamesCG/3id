/* --- Global Dependencies --- */
import idx from 'idx'
import { connect } from 'react-redux'
import { injectStripe } from 'react-stripe-elements';
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

  },
  mapPropsToValues: props => ({
    email: '',
  }),
  validate: values => {
    let errors = {};
    if (!values.name) {
      errors.name = '*Required';
    }
    return errors;
  }
}

export default compose(
  injectStripe,
  // connect(mapStateToProps, mapDispatchToProps),
  withFormik(FormSettings),
  StateHandler,
  QueryLifecycle
)(Form)