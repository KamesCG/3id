/* --- Global Dependencies --- */
import React from "react";

/* ------- Component ------- */
export default ({ line1, line2, city, country, postal_code, zip}) => 
<span>
  {line1}<br/>
  {line2 && <>{line2}<br/></> }
  {city} {country} {postal_code || zip} <br/>
</span>