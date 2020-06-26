import React from "react";
import { render } from "@testing-library/react";
import Error from "../Error";

it("shows error message", () => {
  const { getByText } = render(<Error message="Error message" />);
  expect(getByText("Error message")).toBeInTheDocument();
});

it("doesn't show error message", () => {
  const { queryByText } = render(<Error />);
  const message = queryByText("Error message");
  expect(message).not.toBeInTheDocument();
});
