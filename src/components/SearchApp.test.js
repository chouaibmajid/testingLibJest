import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SearchApp from "./SearchApp";

describe("App", () => {
  test("renders App component", async () => {
    render(<SearchApp />);

    // screen.debug();
    // screen.getByRole("")
    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("wewe");
    expect(screen.getByTestId("wewe")).toBeInTheDocument();
    // expect(screen.getByTestId("wewe")).toBeNull();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "wewe" } });
    expect(screen.getByText("wewe")).toBeInTheDocument();
  });
});
