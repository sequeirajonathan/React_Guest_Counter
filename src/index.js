import React from 'react';
import ReactDOM from 'react-dom';
import Door from './Door';
import './index.css';

class App extends React.Component {
    state = {
        counter: 0,
    }

    addGuest = () => {
        let { counter } = this.state;
        counter++;
        this.setState({
            counter
        })
    }

    removeGuest = () => {
        let { counter } = this.state;

        if (counter <= 0) {
            counter = 0;
        } else {
            counter--;
            this.setState({
                counter
            })
        }
    }

    resetCount = () => {
        let confirmation = prompt('Are you sure you want to reset the guest counter?');
        if (confirmation.toLocaleLowerCase().includes("y")) {
            this.setState({
                counter: 0
            })
        } else {
            return;
        }
 
    }

    render() {
        let { counter } = this.state;
        return (
            <div>
                <Door>
                    <div className="buttonContainer">
                        <div className="ui large buttons">
                            <button id="reset" onClick={this.resetCount} class="negative ui button">Reset</button>
                            <button onClick={this.removeGuest} className="ui button">-</button>
                            <div className="or" />
                            <button onClick={this.addGuest} className="ui button">+</button>
                            <div className="ui compact menu">
                                <div className="item">
                                    <i className="icon users" />Guests<div className="floating ui teal label">{counter}</div>
                                </div>

                            </div>

                        </div>
                    </div>


                </Door>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

