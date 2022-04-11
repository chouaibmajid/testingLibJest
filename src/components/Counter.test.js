import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
describe("Counter", () => {
  test("display value default 0", async () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);

    fireEvent.click(screen.getByText("+"));
    expect(await screen.findByText("1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("-"));
    expect(await screen.findByText("0")).toBeInTheDocument();
  });
});
