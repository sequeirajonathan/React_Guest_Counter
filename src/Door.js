import React from 'react';

function Door(props) {
    return (
        <div className="doorContainer">
            <div className="ui container">
                <div className="ui column grid">
                    <div className="column">
                        <img id="door" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/47d382cf-6dc7-4e1d-a02b-6e5aa6172908/d4wy1cv-cab0baf9-d9ef-4a57-835a-6c285175ff05.png/v1/fill/w_681,h_1173,strp/closed_door_png_by_viktoria_lyn_d4wy1cv-pre.png" alt="Door" />
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default Door;