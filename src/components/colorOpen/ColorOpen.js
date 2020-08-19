import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ColorOpen = ({ rows, colorId = '' }) => {

    let color = Object.values(rows);

    color = color.filter(item => item.id === colorId)[0];

    const colorSquare = {
        background: `${color.color.hex}`
    }

    const history = useHistory();

    console.log(color)

    return (
        <section className="color">
            <Button variant="primary" className="color__button" onClick={() => history.goBack()}> Go back </Button>
            <h2 className="color__name">{color.name}</h2>
            <div className="color__wrapper">
                <ul className="color__list">
                    <li className="color__list-item">{color.color.hex}</li>
                    <li className="color__list-item">{color.color.rgb}</li>
                </ul>
                <div className="color__wrapper-square">
                    <h3 className="color__title">{color.type}</h3>
                    <span className="color__square" style={colorSquare}></span>
                </div>
            </div>
        </section>
        
    )
}
const mapStateToProps = ({ rows }) => {
    return {
        rows
    }
}

export default connect(mapStateToProps, null)(ColorOpen);