import initialState from './initialState';

let newRows

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'DEL':
            newRows = {};

            for (let key in state.rows) {
                if(key !== action.payload) {
                    newRows[key] = Object.assign(state.rows[key])
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

            const newRowsAdded = state.rows;

            newRowsAdded[action.payload.id] = action.payload.newColor;

            const newRowsIdsAdd = [...state.column.rowsIds];
            newRowsIdsAdd.push(action.payload.id)

            console.log(newRowsIdsAdd)

            return {
                ...state,
                column: {
                    ...state.column,
                    rowsIds: newRowsIdsAdd
                },
                rows: newRowsAdded
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
                    continue;
                }

                newRowsEdit[key] = {
                    ...state.rows[key]
                };
            }

            return {
                ...state,
                rows: newRowsEdit
            }

        case 'SAVE_EDIT':
            let newRowSave = {};

            for (let key in state.rows) {

                if( key === action.payload.id) {
                    newRowSave[key] = action.payload.editRow;
                    continue;
                }

                newRowSave[key] = {
                    ...state.rows[key]
                };
            }

            return {
                ...state,
                rows: newRowSave
                
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