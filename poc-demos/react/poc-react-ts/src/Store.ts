import { compose, applyMiddleware, Store, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { state } from "./reducers";

const a: any = window;

const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(reduxThunk)
);

export const store: Store<any> = createStore(
    state,
    enhancers
);
