import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { bindDispatch } from "../../utils";

const Login = (props) => {
  console.log(props);
  return <div>Welcome to React World.....!</div>;
};

const mapStateToProps = createSelector(
  (state) => state.app,
  (app) => ({ app })
);
export default connect(mapStateToProps, bindDispatch)(Login);
