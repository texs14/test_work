import React from 'react';
import { connect } from 'react-redux';

import Row from '../row/Row';
import RowEdit from '../row/RowEdit';

const RowList = ({rows}) => {
    return (
        (rows.length !== 0) ? rows.map((row, i) => {
            if(!row.edit) return <Row row={ row } index={i + 1} key={ row.id }/> 
            else return <RowEdit row={row} index={i + 1} key={ row.id }/>
        }) :
        <tr>
            <th></th>
            <th> The list is empty </th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    )
    
}
const mapStateToProps = ({ rows }) => {
    return { rows }
}

export default connect(mapStateToProps, null)(RowList);