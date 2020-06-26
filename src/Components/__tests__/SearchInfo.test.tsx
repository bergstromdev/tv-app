import React from "react";
import { render } from "@testing-library/react";
import SearchInfo from "../SearchInfo";

it("shows error message", () => {
  const { getByText } = render(<SearchInfo />);
  expect(
    getByText(
      "Search for TV Shows by typing the name of the show in the searchbox above."
    )
  ).toBeInTheDocument();
});
