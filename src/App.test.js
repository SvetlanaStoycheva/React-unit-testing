import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show  it on a list", async () => {
  //find our two inputs name and email, we need to click on them, to type in them, we need to click the btn to submit the form, find these new name and email in the table,

  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard(nameInput, "jock");
  await user.click(emailInput);
  await user.keyboard(emailInput, "jack@email.com");
  await user.click(button);

  // screen.debug();
  const name = screen.getByRole("cell", { name: "jock" });
  const email = screen.getByRole("cell", { name: "jack@email.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
