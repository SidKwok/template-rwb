import React from 'react';
import Hello from './component/Hello.jsx';
import styles from './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: 'foo'};
    }
    render() {
        return (
            <div className={styles.app}>
                <Hello />
                bar
            </div>
        );
    }
}
