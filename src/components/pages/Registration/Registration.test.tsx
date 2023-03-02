import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { store } from "src/store";
import { Registration } from ".";

describe("registration component", () => {
  it("check that input value", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>,
    );
    const registrationInput = await screen.findByTestId("registrationInput");
    const registrationPassword = await screen.findByTestId("registrationPassword");
    const registrationRepeatedPassword = await screen.findByTestId("registrationRepeatedPassword");
    const button = await screen.findByTestId("loginButton");

    expect(registrationInput).toBeInTheDocument();
    expect(registrationPassword).toBeInTheDocument();
    expect(registrationRepeatedPassword).toBeInTheDocument();

    expect(screen.getByTestId("registrationPassword")).toBeRequired();

    expect(button).toBeInTheDocument();

    userEvent.type(registrationInput, "123");
    expect(screen.getByDisplayValue("123")).toBeInTheDocument();

    userEvent.type(registrationPassword, "12345");
    expect(screen.getByDisplayValue("12345")).toBeInTheDocument();
  });
  test("Error element: passwords don't match", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>,
    );
    const registrationInput = await screen.findByTestId("registrationInput");
    const registrationPassword = await screen.findByTestId("registrationPassword");
    const registrationRepeatedPassword = await screen.findByTestId("registrationRepeatedPassword");

    const button = await screen.findByTestId("loginButton");

    userEvent.type(registrationInput, "Login23");
    expect(screen.getByDisplayValue("Login23")).toBeInTheDocument();

    userEvent.type(registrationPassword, "23");
    expect(screen.getByDisplayValue("23")).toBeInTheDocument();

    userEvent.type(registrationRepeatedPassword, "12345Sf");
    expect(screen.getByDisplayValue("12345Sf")).toBeInTheDocument();

    userEvent.click(button)

    const error = await screen.findByTestId("registrationPassword_error");

    expect(screen.getByText("Пароли не совпадают")).toBeInTheDocument()
    expect(error).toBeInTheDocument()
  });
  test("Error element: The password must be at least 6 characters long", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>,
    );
    const registrationInput = await screen.findByTestId("registrationInput");
    const registrationPassword = await screen.findByTestId("registrationPassword");
    const registrationRepeatedPassword = await screen.findByTestId("registrationRepeatedPassword");
    const button = await screen.findByTestId("loginButton");

    userEvent.type(registrationInput, "Login23");
    expect(screen.getByDisplayValue("Login23")).toBeInTheDocument();

    userEvent.type(registrationPassword, "Test");
    userEvent.type(registrationRepeatedPassword, "Test");

    userEvent.click(button)

    const error = await screen.findByTestId("registrationPassword_error");

    expect(screen.getByText("Пароль должен быть 6 > симоволов")).toBeInTheDocument()
    expect(error).toBeInTheDocument()
  });
  test("Error element: The field should not be empty", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>,
    );
    const registrationInput = await screen.findByTestId("registrationInput");
    const registrationPassword = await screen.findByTestId("registrationPassword");
    const registrationRepeatedPassword = await screen.findByTestId("registrationRepeatedPassword");
    const button = await screen.findByTestId("loginButton");

    userEvent.type(registrationPassword, "Password2");
    userEvent.type(registrationRepeatedPassword, "Password2");
    userEvent.click(button)

    const error = await screen.findByTestId("registrationInput_error");

    expect(screen.getByText("Поле не должно быть пустым")).toBeInTheDocument()
    expect(error).toBeInTheDocument()
  });
  test("check that input focus", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>,
    );
    const registrationInput = await screen.findByTestId("registrationInput");
    const registrationPassword = await screen.findByTestId("registrationPassword");
    const registrationRepeatedPassword = await screen.findByTestId("registrationRepeatedPassword");

    expect(registrationInput).not.toHaveFocus();
    registrationInput.focus();
    expect(registrationInput).toHaveFocus();

    expect(registrationPassword).not.toHaveFocus();
    registrationPassword.focus();
    expect(registrationPassword).toHaveFocus();

    expect(registrationRepeatedPassword).not.toHaveFocus();
    registrationRepeatedPassword.focus();
    expect(registrationRepeatedPassword).toHaveFocus();
  });
});
