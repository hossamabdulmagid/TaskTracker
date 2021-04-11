import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducers from './data/dataReducer'
//blacklist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

//whitelist
const rootReducer = combineReducers({
  data: dataReducers,


});

export default persistReducer(persistConfig, rootReducer);
