import React from "react";
import { render } from "@testing-library/react";
import Results from "../Results";

it("doesn't show results", () => {
  const { queryByTestId } = render(<Results result={[]} />);
  const results = queryByTestId("results__container");
  expect(results).not.toBeInTheDocument();
});
