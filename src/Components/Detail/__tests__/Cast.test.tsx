import React from "react";
import { render } from "@testing-library/react";
import Cast from "../Cast";

it("Shows id", () => {
  const { getByText } = render(<Cast id={123} />);
  expect(getByText("123")).toBeInTheDocument();
});
