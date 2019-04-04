import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Ref from "./Ref";

afterEach(cleanup);

test("test stateful component", () => {
  const { getByTestId } = render(<Ref defaultValue="fallback" />);
  const input = getByTestId(/ref-input/i);
  const button = getByTestId(/ref-button/i);
  expect(input.value).toBe("fallback");
  fireEvent.click(button);
  expect(input.value).toBe("");
});
