import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../processors/reducers';
import rootSaga from '../processors/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        ...reducers
    }),
    {},
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;