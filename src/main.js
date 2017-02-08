import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// ReactDOM.render(<App />, document.getElementById('root'));
// 模块热替换的API
if (module.hot) {
    module.hot.accept('./App.jsx', () => render(App));
}
