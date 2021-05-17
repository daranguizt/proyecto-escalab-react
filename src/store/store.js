import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer';
import { mangaReducer } from '../reducers/mangaReducer';
import { userDetailsReducer } from '../reducers/userDetailsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    auth: authReducer,
    manga: mangaReducer,
    userDetails: userDetailsReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));