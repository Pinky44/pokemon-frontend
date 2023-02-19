import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "src/store";
import { Login } from "./index";

describe("login component", () => {
  test("check that input value", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>,
    );
    const login = await screen.findByTestId("loginInput");
    const password = await screen.findByTestId("passwordInput");

    expect(login).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    userEvent.type(login, "input");
    expect(screen.getByDisplayValue("input")).toBeInTheDocument();

    userEvent.type(password, "password");
    expect(screen.getByDisplayValue("password")).toBeInTheDocument();
  });
  test("check that input focus", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>,
    );
    const login = await screen.findByTestId("loginInput");
    const password = await screen.findByTestId("passwordInput");

    expect(login).not.toHaveFocus();
    login.focus();
    expect(login).toHaveFocus();

    expect(password).not.toHaveFocus();
    password.focus();
    expect(password).toHaveFocus();
  });
  test("Error element: The field should not be empty", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>,
    );
    const inputPassword = await screen.findByTestId("passwordInput");
    const button = await screen.findByTestId("loginButton");

    userEvent.type(inputPassword, "Password2");
    userEvent.click(button)

    const error = await screen.findByTestId(
      "loginInput_error"
    );

    expect(screen.getByText("Поле не должно быть пустым")).toBeInTheDocument()
    expect(error).toBeInTheDocument()
  });
});
