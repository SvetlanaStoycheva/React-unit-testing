//whrite test for UserForm component

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

//the test func is provided by the test runner which is jest
test("it shows two inputs and a button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();

  //render the component
  render(<UserForm onUserAdd={mock} />);

  //Find the two imputs
  //   const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  //Simulate typing in a name
  user.click(nameInput);
  user.keyboard("John");

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("john@mail.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  user.click(button);

  //Assertion to make sure onUserAdd was called with the correct arguments
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "John", email: "john@mail.com" });
});

test("empties the two inputs when form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("John");
  await user.click(emailInput);
  await user.keyboard("john@email.com");
  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
