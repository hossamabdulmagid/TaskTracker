import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//blacklist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

//whitelist
const rootReducer = combineReducers({
  //lang: LanguagesReducer,
  //Text: TextReducer,
//  Req: requestReducer,

});

export default persistReducer(persistConfig, rootReducer);
