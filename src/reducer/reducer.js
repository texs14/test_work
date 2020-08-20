import initialState from './initialState';

let newRows, newState;

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'DEL':
            newRows = {};

            for (let key in state.rows) {
                if(key !== action.payload) {
                    newRows[key] = Object.assign(state.rows[key])
                }
            }

            newState = {
                ...state,
                column: {
                    ...state.column,
                    rowsIds: state.column.rowsIds.filter( rowId => rowId !== action.payload)
                },
                rows: newRows
            };

            localStorage.setItem('table', JSON.stringify(newState));

            return newState;
        
        case 'ADD':

            const newRowsAdded = state.rows;

            newRowsAdded[action.payload.id] = action.payload.newColor;

            const newRowsIdsAdd = [...state.column.rowsIds];
            newRowsIdsAdd.push(action.payload.id)

            newState = {
                ...state,
                column: {
                    ...state.column,
                    rowsIds: newRowsIdsAdd
                },
                rows: newRowsAdded
            };

            localStorage.setItem('table', JSON.stringify(newState));

            return newState;
                        
        case 'POPUP_TOGGLE':

            newState = {
                ...state,
                showAddPopup: !state.showAddPopup
            };

            return newState;

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


            localStorage.setItem('table', JSON.stringify(newState));

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

            newState = {
                ...state,
                rows: newRowSave
                
            };

            localStorage.setItem('table', JSON.stringify(newState));

            return newState;
                
        case 'DROP':

            newState = {
                ...state,
                column: action.payload,
            };

            localStorage.setItem('table', JSON.stringify(newState));

            return newState;

        default:
            return state;
    }
}

export default reducer;