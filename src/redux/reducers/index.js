import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

const reducers = combineReducers({
  getData: dataReducer,
});


export default reducers
