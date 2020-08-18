import initialState from './initialState';

let newRows

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'DEL':
            newRows = {};

            for (let key in state.rows) {
                if(key !== action.payload) {
                    newRows[key] = Object.assign(state.rows[key])
                    // console.log(newRows);
                }
            }

            return {
                ...state,
                column: {
                    ...state.column,
                    rowsIds: state.column.rowsIds.filter( rowId => rowId !== action.payload)
                },
                rows: newRows
            }
        
        case 'ADD':
            return {
                ...state,
                column: {
                    ...state.column,
                    rows: [
                        ...state.column.rows,
                        action.payload,
                    ]
                }
                
            }

        case 'SAVE':
            return {
                ...state,
                column: {
                    ...state.column,
                    rows: [
                        action.payload,
                        ...state.column.rows
                    ]
                }
            }

        case 'SHOW_POPUP':
            return {
                ...state,
                showAddPopup: true
            }
        
        case 'HIDDEN_POPUP':
            return {
                ...state,
                showAddPopup: false
            }

        case 'EDIT_TOGGLE':

            let newRowsEdit = {};

            for (let key in state.rows) {

                if( key === action.payload) {
                    newRowsEdit[key] = {
                        ...state.rows[key],
                        edit: !state.rows[key].edit
                    };
                    console.log(key);
                    break;
                }

                newRowsEdit[key] = {
                    ...state.rows[key]
                };
            }

            console.log(newRowsEdit);

            return {
                ...state,
                rows: newRowsEdit
            }

        case 'SAVE_EDIT':
            return {
                ...state,
                column: {
                    ...state.column,
                    rows: state.column.rows.map( row => (row.id === action.payload.id) ?
                        action.payload :
                        row
                    )
                }
            }
                
        case 'DROP':
            return {
                ...state,
                column: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;