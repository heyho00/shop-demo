import "reflect-metadata";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/defaultTheme";
import GlobalStyle from "./styles/GlobalStyle";

import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);

function index() {
  Reflect.get(window, "IMP").init(process.env.PORTONE_IMP);

  const element = document.getElementById("root");
  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(
    <StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />

        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

index();
