import React from 'react';
import idx from 'idx'
import Geosuggest from 'react-geosuggest';
 
class Geolocation extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.onSuggestSelect = this.onSuggestSelect.bind(this)
  }
  componentDidMount() {
    
  }

  componentDidCatch() {
    console.log('Error with Geolocation address filtering.')
  }
  /**
   * Render the example app
   */
  render() {
    const { name, fixtures, initialValue, placeholder, setFieldTouched, setFieldValue, } = this.props
 
    return (
      <Geosuggest
        name={name}
        ref={el=>this._geoSuggest=el}
        onBlur={this.props.setFieldTouched}
        initialValue={initialValue}
        fixtures={fixtures}
        placeholder={'Location Search'}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20"
      />
    )
  }
 
  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect(value) {

    if(idx(value, _=>_.gmaps.address_components)) {
      // Select Values from Geolocation Suggestions
      const streetNumber = Value('street_number', value.gmaps.address_components)
      const streetAddress = Value('route', value.gmaps.address_components)
      const city = ValueLong('locality', value.gmaps.address_components)
      const country = Value('country', value.gmaps.address_components)
      const countryLabel = ValueLong('country', value.gmaps.address_components)
      const zip = Value('postal_code', value.gmaps.address_components)
      const postal_code = Value('postal_code', value.gmaps.address_components)

      const line1 = streetNumber && streetAddress ? `${streetNumber} ${streetAddress}` : null
      const address = {
        line1,
        city,
        country: country,
        postal_code,
      }

      this.props.setFieldValue(this.props.name || 'geolocation', value)
      this.props.setFieldValue(this.props.nameUpdate || 'address', address)
    } else {

    }

  }
}


const Select = (type, fields) => fields.filter( field => field.types.includes(type) )
const ExtractShort = fields => fields.map( field => field.short_name )[0]
const ExtractLong = fields => fields.map( field => field.long_name )[0]

const Value = (type, fields) => ExtractShort(Select(type, fields))
const ValueLong = (type, fields) => ExtractLong(Select(type, fields))


export default Geolocation