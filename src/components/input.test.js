import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import React from "react";

test("input",async () => {
  render(<Input />);
  const input1 = screen.getByLabelText("Nom");
  const input2 = screen.getByLabelText("lastName");
  const allInput = screen.getAllByRole("textbox");

  //   ou bien

  //   const input1 = screen.getByPlaceholderText("entrez votre nom");
  //   const input2 = screen.getByPlaceholderText("entrez votre prenom");

  await  userEvent.type(input1, "chouaib");
  await  userEvent.type(input2, "majid");

    //   ou bien
  
  // fireEvent.change(input1, { target: { value: "chouaib" } });
  // fireEvent.change(input2, { target: { value: "majid" } });
  expect(input1).toHaveValue("chouaib");
  expect(input2).toHaveValue("majid");
  expect(input1.value).toBe("chouaib");
  expect(input2.value).toBe("majid");
  expect(allInput).toHaveLength(2);
});
