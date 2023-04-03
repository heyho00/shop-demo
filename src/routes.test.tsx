import { render, screen, waitFor } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render((
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    ));
  }

  context('when the current path is “/”', () => {
    it('renders the intro page', () => {
      renderRouter('/');

    //   screen.getByText(/원하시는 주문을 터치해주세요/);
    });
  });

  context('when the current path is “/order”', () => {
    it('renders the order page', () => {
      renderRouter('/order');

    //   screen.getByText(/메가테라 푸드코트 키오스크/);
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders the order result page', async () => {
      renderRouter('/order/complete?orderId="ID"');

    //   await waitFor(() => {
    //     screen.getByText(/주문이 완료되었습니다!/);
    //   });
    });
  });
});