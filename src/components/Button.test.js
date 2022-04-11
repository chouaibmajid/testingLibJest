import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
describe("test Button", () => {
  test("button clicked", () => {
    render(<Button />);
    expect(screen.getByText("0")).toBeInTheDocument();
    const buttonAdd = screen.getByRole("button", { name: "click+" });
    fireEvent.click(buttonAdd);
    expect(screen.getByText("1")).toBeInTheDocument();
    const buttonNotAdd = screen.getByRole("button", { name: "click-" });
    fireEvent.click(buttonNotAdd);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
