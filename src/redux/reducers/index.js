import { combineReducers } from "redux";
import Users from "./Users";

const rootReducer = () =>
  combineReducers({
    Users,
  });

export default rootReducer;
