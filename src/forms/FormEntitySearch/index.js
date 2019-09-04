/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { withFormik } from 'formik';
import { Form, ErrorMessage } from 'formik';
import { IoIosSearch } from 'react-icons/io';
/* --- Local Dependencies --- */
import { fromDatabase } from 'store/departments/selectors'
import { databaseWriteRequest, databaseReadRequest } from 'store/departments/actions'
import { Button, Box, Flex } from 'atoms'
import { Input, Select } from 'fields'
import { Popover } from 'components'


const SearchStyled = styled(Input)`
  border: none;
  border-radius: 5px 0 0 5px !important;
  margin-bottom: 0 !important;
  height: 39px !important;
  transition: opacity 100ms, width 120ms ease-out;
`

/* --- React Component --- */
class Formik extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isSearching: false,
    }

    this.toggleSearching = this.toggleSearching.bind(this)
  }

  toggleSearching()
  {
    this.setState({
      isSearching: !this.state.isSearching
    })
  }
  
  // Mounted
  componentDidMount()
  {

  }
  // Updated
  componentDidUpdate()
  {

  }

  // Error Catched
  componentDidCatch() {
    
  }
  
  /* Render */
  render(){
    const { isValid, setFieldValue, setFieldTouched, styled } = this.props
    
    return(
      <Box {...styled}>
            <Form onSubmit={this.props.handleSubmit} onFocus={this.toggleSearching} style={{width: '100%'}} >
              {/* <Popover content={<Results/>} isOpenParent={this.state.isSearching} >  */}
                  <Flex alignCenter width={1}>
                    {/* <IoIosSearch color='white'  fontSize='2em' /> */}
                    <SearchStyled type="text" name="Search" placeholder='Search'
                      className={this.state.isSearching ? 'active' : ''}
                      onBlur={this.toggleSearching}
                      onFocus={this.toggleSearching}
                      height={39}
                      m={0}
                      p={0}
                    />
                    <Select
                      plain={true}
                      gradient={true}
                      name='categories'
                      placeholder='Select Entity'
                      options={[{
                        value: 'people',
                        label: 'People',
                      },
                      {
                        value: 'types',
                        label: 'Types',
                      },
                      {
                        value: 'issuers',
                        label: 'Issuers',
                      }
                    ]}
                      m={0}
                      p={0}
                      styled={{height: 38, width: 250}}
                      setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}/>
                  </Flex>
              {/* </Popover> */}
            </Form>
      </Box>
    )
  }
}

const Results = props =>
<Box bg='white' p='20px' width='350px'>
  Results
</Box>
/* ------------------ */
/*    GLOBAL STATE    */
/* ------------------ */
const mapStateToProps = (state, props) => ({
  // write: fromDatabase.get(state,  ''),
});


const mapDispatchToProps = (dispatch, props) => ({
  // save: (entity)=>dispatch(databaseWriteRequest({
  //   payload: entity,
  //   metadata: {
  //     branch: [''],
  //     delta: '',
  //     writeType: 'create',
  //   } 
  // })),
});

/* ------------------ */
/* Form Configuration */
/* ------------------ */
const FormikStateful = withFormik({
  /* Map Props to Field Values */
  mapPropsToValues: props => ({
    name: '',
  }),

  /* Form Validation */
  validate: values => {
    let errors = {};
    if (!values.name) errors.name = '*Required';
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {


  }
})(Formik)

export default connect(mapStateToProps, mapDispatchToProps)(FormikStateful)