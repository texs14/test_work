import { v4 } from 'uuid';

const initialState = {
    column: {
        id: 'column-1',
        
    },
    showAddPopup: false,
    rows:[
        {
            name: 'name1',
            type: 'main',
            color: '#000000',
            id: v4(),
            edit: false,
        },
        {
            name: 'name2',
            type: 'backgrond',
            color: '#000000',
            id: v4(),
            edit: false,
        },
        {
            name: 'name3',
            type: 'title',
            color: '#000000',
            id: v4(),
            edit: false,
        },
    ]
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'DEL':
            return {
                ...state,
                rows: state.rows.filter(row => row.id !== action.payload)
            }
        
        case 'ADD':
            return {
                ...state,
                rows: [
                    ...state.rows,
                    action.payload,
                ]
            }

        case 'SAVE':
            return {
                ...state,
                rows: [
                    action.payload,
                    ...state.rows
                ]
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
            return {
                ...state,
                rows: state.rows.map( row => (row.id === action.payload) ? 
                        {
                            ...row,
                            edit: !row.edit 
                        } :
                        row
                    )
                
            }

        case 'SAVE_EDIT':
            return {
                ...state,
                rows: state.rows.map( row => (row.id === action.payload.id) ?
                    action.payload :
                    row
                )
            }


        default:
            return state;
    }
}

export default reducer;