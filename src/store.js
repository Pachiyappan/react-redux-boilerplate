import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

export default function configStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
