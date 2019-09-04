/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'


/* --- Global Dependencies --- */
import Geolocation from '../Geolocation'
import Field from '../Field'
import Select from '../Select'
import { Box, Flex, HorizontalRule } from 'atoms'
import { Map } from 'components'

const Address = ({ className, horizontal, name, setFieldValue, setFieldTouched, setValues, isMapEnabled, options, values, ...props }) => 
<>
  <Flex alignCenter>
    <Flex column flex={10}>
      <Geolocation name='geolocation' setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} />
      {/* <HorizontalRule my={10}/> */}
      <Field name="address.line1" placeholder='Address Line 1' small />
      <Field name="address.line2" placeholder='Address Line 2' small/>
      <Flex alignCenter between wrap direction={['column', 'column', 'row']} >
        <Box width={[1,1, 0.65]}>
          <Field name="address.city" placeholder='City' small/>
        </Box>
        <Box width={[1,1, 0.30]}>
          <Field name="address.postal_code" placeholder='Zip' small/>
        </Box>
        <Box width={[1]} mt={10}>
          <Select
            name='address.country'
            placeholder='Country'
            values={values}
            options={optionsCountry} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} small/>
          </Box>
      </Flex>
    </Flex>
    {
      isMapEnabled && <Box flex={5} height={200} borderRadius={7} overflow='hidden' ml={45}>
        <Map location={values.geolocation.location}/>
      </Box>
    }
  </Flex>
  
</>


const optionsCountry = [
  { value: 'CA', label: 'Canada' },
  { value: 'US', label: 'United States' },
]


export default Address