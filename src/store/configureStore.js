import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {rootReducer} from "../reducers/rootReducer";
//import {initSaga} from '../sagas/initSaga';
import {rootSaga} from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, sagaMiddleware)
    );
    //sagaMiddleware.run(initSaga);
    rootSaga(sagaMiddleware);
    return store;

}