import React from 'react';
// import './Hello.scss'
import './Hello.less'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: 'y'};
    }
    render() {
        return (
            <div id="Hello">
                <div className="msg">{this.state.test}</div>
                <div className="info">hey</div>
            </div>
        );
    }
}
