import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/store";
import userEvent from "@testing-library/user-event";
import { Search } from ".";

describe("search component", () => {
  it("check that input value removes correctly", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>,
    );
    const input = await screen.findByTestId("searchInput");
    const button = await screen.findByTestId("searchButton");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(input, "123");
    expect(screen.getByDisplayValue("123")).toBeInTheDocument();

    userEvent.click(button);
    expect(screen.queryByDisplayValue("123")).not.toBeInTheDocument();
  });
});
