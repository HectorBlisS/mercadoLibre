import * as sagas from '.';

export const rootSaga = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))
};

