import React from "react";
import { mount, shallow } from "enzyme";
import Login from "../components/pages/Login";

describe("renders learn react link", () => {
  const component = <Login />;

  it("render without crashing", () => {
    const wrapper = mount(component);
    wrapper.unmount();
  });

  it("test snapshot", () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
