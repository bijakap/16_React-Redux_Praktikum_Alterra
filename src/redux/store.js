import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import todoSlice from "./todoSlice"

const reducers = combineReducers({
  todo: todoSlice,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
console.log("persistedReducer = ",persistedReducer)

const store = configureStore({ reducer: persistedReducer })
const persistor = persistStore(store)
console.log("store = ",store)
console.log("persistor = ",persistor)
export { store, persistor }