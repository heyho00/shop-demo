import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import routes from "./routes";
import defaultTheme from "./styles/defaultTheme";

const context = describe;

describe("routes", () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    );
  }

  context("when the current path is “/”", () => {
    it("renders the intro page", async () => {
      renderRouter("/");

      await waitFor(() => {
        screen.getByText("top");
      });
    });
  });

  context("when the current path is “/cart”", () => {
    it("renders the cart page", async () => {
      renderRouter("/cart");

      await waitFor(() => {
        screen.getByText("장바구니");
      });
    });
  });

  context("when the current path is “/login", () => {
    it("renders the login page", async () => {
      renderRouter("/login");

      screen.getByRole("heading", { name: "로그인" });

      await waitFor(() => {
        screen.getByText(/Category #1/);
      });

      fireEvent.change(screen.getByLabelText("E-mail"), {
        target: { value: "newbie@example.com" },
      });

      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "password" },
      });

      fireEvent.click(screen.getByRole("button", { name: "로그인" }));

      await waitFor(() => {
        // screen.getByText(/Orders/);
        screen.getByText(/Cart/);
        screen.getByText(/Logout/);
      });
    });
  });
});
