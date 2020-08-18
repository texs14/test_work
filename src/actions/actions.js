const deleteRow = (id) => {
    const conf = window.confirm('Удалить?');

    if (conf) {
        return {
            type: 'DEL',
            payload: id
        };
    } else {
        return {
            type: 'DEL'
        };
    }
}

const addColor = (newColor) => {
    return {
        type: 'ADD',
        payload: newColor
    }
}

const showPopup = () => {
    return {
        type: 'SHOW_POPUP'
    }
}

const hiddenPopup = () => {
    return {
        type: 'HIDDEN_POPUP'
    }
}

const editToggle = (id) => {
    return {
        type: 'EDIT_TOGGLE',
        payload: id
    }
}

const saveEdit = (editRow) => {
    return {
        type: 'SAVE_EDIT',
        payload: editRow
    }
}

const drop = (newColumn) => {

    

    return {
        type: 'DROP',
        payload: newColumn
    }
}

export {
    deleteRow,
    addColor,
    hiddenPopup,
    showPopup,
    editToggle,
    saveEdit,
    drop
}