import { createStore, applyMiddleware } from "redux";
import  thunk from "redux-thunk";
import { getStorage, setStorage } from "../utils/storage";
import RootReducer from "./reducers/rootReducer";

const Store = ()=>{
    var initialState = getStorage();
    const StoreData = (store) => (next) => (action)=>{
        const saveData = store.getState();
        setStorage(saveData);
        return next(action)
    }
    return createStore(RootReducer, initialState, applyMiddleware(thunk, StoreData));
}
export default Store();