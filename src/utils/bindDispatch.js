import { memoize } from "lodash";
import * as appActions from "../store/actions";
import { bindActionCreators } from "redux";

const bindDispatch = memoize((dispatch) => ({
  dispatch,
  actions: bindActionCreators(appActions, dispatch),
}));

export default bindDispatch;
