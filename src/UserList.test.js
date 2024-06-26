import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "John", email: "john@mail.com" },
    { name: "Doe", email: "doe@mail.com" },
  ];
  render(<UserList users={users} />);

  return { users };
}

test("render one row for each user", () => {
  //render the component
  const users = [
    { name: "John", email: "john@mail.com" },
    { name: "Doe", email: "doe@mail.com" },
  ];
  //   const { container } = render(<UserList users={users} />);
  renderComponent();

  //Find all the rows in the table
  //   screen.logTestingPlaygroundURL();
  //   const rows = screen.getAllByRole("row");
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  //   const rows = container.querySelectorAll("tbody tr");

  //Assrtion: correct number of rows
  expect(rows).toHaveLength(2); //here we are going to have 3 rows, one row <th>Name and Email</th> and two from two users. If we can't use getByRole we can use data-testid=""
});

test("render the name and email of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
