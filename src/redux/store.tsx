import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './root-saga';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const sagaMiddlware = createSagaMiddleware();

const middlewares = [sagaMiddlware];
//@ts-ignore
process.env.NODE_ENV === 'development' && middlewares.push(logger);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddlware.run(rootSaga);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
