import 'whatwg-fetch';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import React, { render } from 'preact-compat';
import { Provider } from 'preact-redux';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import 'preact/devtools';
import rootReducer from './reducers';
import App from './app';

import '../sass/index.scss';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware, thunkMiddleware) // lets us dispatch() functions
));

/**
 * Main component to render into the dom
 * @return {Object|JSX} dispatching state
 */
const Main = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

render((<Main />), document.getElementById('container'));

