import { v4 } from 'uuid';

let id1, id2, id3;
let row1, row2, row3;

id1 = `${v4()}`;
id2 = `${v4()}`;
id3 = `${v4()}`;

row1 = {
    name: 'name1',
    type: 'main',
    color: {
        hex: '#000000',
        rgb: 'rgb(0, 0, 0)'
    },
    id: id1,
    edit: false,
};

row2 = {
    name: 'name2',
    type: 'backgrond',
    color: {
        hex: '#000000',
        rgb: 'rgb(0,0,0)'
    },
    id: id2,
    edit: false,
};

row3 = {
    name: 'name3',
    type: 'title',
    color: {
        hex: '#000000',
        rgb: 'rgb(0,0,0)'
    },
    id: id3,
    edit: false,
};

const initialState = {
    column: {
        id: 'column-1',
        rowsIds: [id1, id2, id3]
    },
    rows:{},
    showAddPopup: false,
};

initialState.rows[id1] = row1;
initialState.rows[id2] = row2;
initialState.rows[id3] = row3;

export default initialState;