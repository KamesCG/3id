export const Columns = [
  {
    Header: 'Type',
    accessor: 'type',
    style:{ 'white-space': 'unset', 'text-align': 'center'},
    width: 150,
    Cell: props =>
    <>
      <span className='number'>{props.value}</span>
    </>
  },
  {
    Header: 'Issuer',
    accessor: 'iss',
    style:{ 'white-space': 'unset', 'text-align': 'center'},
    width: 200,
    Cell: props =>
    <>
      <span className='number'>{props.value}</span>
    </>
  },
  {
    Header: 'Date Issue',
    accessor: 'date',
    style:{ 'white-space': 'unset', 'text-align': 'center'},
    Cell: props =>
    <>
      <span className='number'>{props.value}</span>
    </>
  },
  {
    Header: 'Actions',
    accessor: 'date',
    style:{ 'white-space': 'unset', 'text-align': 'center'},
    Cell: props =>
    <>
      <span className='number'>{props.value}</span>
    </>
  },
 
]