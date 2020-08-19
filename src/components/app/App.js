import React from 'react';
import { Route } from 'react-router-dom';

import TableColors from '../tableColors/TableColors';
import PopupAdd from '../popupAdd/PopupAdd';
import ColorOpen from '../colorOpen/ColorOpen';


const App = () => {
        
        return (
        <>
            <Route exact path='/' component={TableColors} />
            <Route path='/:id' 
                render={
                    ({match}) => {
                        const {id} = match.params;
                        return <ColorOpen colorId={id}/>
                    }
                } 
            /> 
            <PopupAdd/>
        </>
    )

}

export default App;