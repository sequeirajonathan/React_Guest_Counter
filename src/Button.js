import React from 'react';

function Button(props) {
    return (
        <div className="buttonContainer">
            <div className="ui large buttons">
                <button className="ui button">-</button>
                <div className="or" />
                <button className="ui button">+</button>
            </div>

        </div>
    );
}

export default Button;