import React from "react";
import ErrorAlert from "../ErrorAlert";
import { render, screen } from "@testing-library/react";

describe("ErrorAlert", () => {
  it("Should render the error in an alert", () => {
    render(<ErrorAlert error={new Error("Random Error")} />);
    expect(screen.getByText("Random Error")).toBeTruthy();
  });
});
