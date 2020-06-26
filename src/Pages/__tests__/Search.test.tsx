import React from "react";
import { render } from "@testing-library/react";
import Search from "../Search";

it("contains a search input", () => {
  const { getByRole } = render(<Search />);
  expect(getByRole("search")).toBeInTheDocument();
});
