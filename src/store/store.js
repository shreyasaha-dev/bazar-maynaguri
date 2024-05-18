import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./Reducers/userDataReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const rootReducer = combineReducers({
  userToken: userDataReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userToken"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
