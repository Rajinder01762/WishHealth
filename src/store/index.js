import { createStore, applyMiddleware, compose } from "redux";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import { rootReducer } from './reducers/index'
import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const sagaMiddleware = createSagaMiddleware();
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// let middleWare = composeWithDevTools(
//   applyMiddleware(sagaMiddleware, logger)
// );

    // use desired middlewares
  
export const store = createStore(
          rootReducer,
          applyMiddleware(sagaMiddleware, logger)
        );
  
        // persistStore(store, null, () => resolve(store));
        sagaMiddleware.run(rootSaga);

  