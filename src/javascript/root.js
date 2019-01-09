import '../stylesheet/root.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import { createBrowserHistory } from 'history';
import * as reducers from './redux/reducers';
import { path } from './commons';

import App from './App';

const history = createBrowserHistory({basename: ""});

const middleware = routerMiddleware(history);
const loggerMiddleware = createLogger({
    predicate: (getState, action) => process.env.NODE_ENV !== 'production',
    collapsed: (getState, action, logEntry) => true
});

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(
        middleware,
        thunkMiddleware,
        loggerMiddleware
    )
);

const Root = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path={path.home} name="home" component={App}/>
            </Router>
        </Provider>
    );
};


ReactDOM.render(<Root />, document.getElementById('root'));
