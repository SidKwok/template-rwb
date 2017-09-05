import React, {render} from 'react';
import {Provider} from 'preact-redux';
import store from '$redux/store';
import App from './App';

let root;
const init = () => {
    root = render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.body,
        root
    );
};

if (module.hot) {
    require('preact/devtools');
    module.hot.accept('./App', () => requestAnimationFrame(init));
}

init();
