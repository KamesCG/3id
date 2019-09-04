/* --- Global Dependencies --- */
import idx from 'idx'
import styled from 'styled-components'
import React from 'react'
import ReactTable from 'react-table'

const TableStyled = styled(ReactTable)`

`

TableStyled.defaultProps = {
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
    },
  ],
  data: [],
  defaultPageSize: 10
}

export default ({ className, columns, defaultPageSize, data, ...props}) =>
<TableStyled
  className={`table ${className}`}
  defaultPageSize={defaultPageSize}
  data={data}
  columns={columns}
/>

