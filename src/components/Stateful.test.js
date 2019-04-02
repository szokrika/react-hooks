import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Stateful from "./Stateful";

afterEach(cleanup);

test("test stateful component", () => {
  const { getByTestId } = render(<Stateful />);
  const toggle = getByTestId(/toggle/i);
  const output = getByTestId(/toggle-output/i);
  expect(toggle).toHaveAttribute("class", "toggle toggle-off");
  expect(output).toHaveTextContent("off");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("class", "toggle toggle-on");
  expect(output).toHaveTextContent("on");
});
