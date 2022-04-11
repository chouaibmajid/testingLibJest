import React from "react";
import { render, screen } from "@testing-library/react";
import Fetch from "./Fetch";
const API_KEY = "c89646cb9c2f9f7a6144c074fff0e9c7";
const baseURL = "https://api.themoviedb.org/3";

describe("Fetch", () => {
  test("is render", async () => {
    render(<Fetch />);
    expect(screen.getByText(/...Loading/)).toBeInTheDocument();
    expect(await screen.findByRole("data")).toBeInTheDocument();
  });
});
