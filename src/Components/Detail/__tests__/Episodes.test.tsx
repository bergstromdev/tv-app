import React from "react";
import { render } from "@testing-library/react";
import Episodes from "../Episodes";

it("Shows id", () => {
  const { getByText } = render(<Episodes id={123} />);
  expect(getByText("123")).toBeInTheDocument();
});
