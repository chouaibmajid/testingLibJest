import React from "react";
import { findByRole, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Getdata from "./GetData";

const server = setupServer(
  rest.get("/server", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          src: "./1.jpeg",
          name: "first",
        },
        {
          id: 2,
          src: "./2.jpeg",
          name: "last",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("test data", async () => {
  render(<Getdata />);
  const images = await screen.findAllByRole("img");
  expect(images).toHaveLength(2);
  const imageName = images.map((item) => item.alt);
  expect(imageName).toEqual(["first", "last"]);
});
test("handles server error", async () => {
  server.use(
    rest.get("/server", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<Getdata />);

  const alert = await screen.findByRole("alert");
  const images = screen.queryAllByRole("img");

  expect(alert).toBeInTheDocument();
  expect(alert.textContent).toBe("un probléme est survenue")
  expect(images).toHaveLength(0);
});
