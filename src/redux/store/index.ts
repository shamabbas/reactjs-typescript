import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "../reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const middlewares = [thunk];
const appliedMiddlewares = applyMiddleware(...middlewares);
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const store = createStore(persistedReducer, appliedMiddlewares);
const persistor = persistStore(store);

export { store, persistor };
