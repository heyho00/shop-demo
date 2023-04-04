# Shop demo

## 기능

1. 상품 목록 확인
2. 상품 상세 정보 확인
3. 장바구니에 상품 담기
4. 주문하기 → 배송지 입력, 결제
5. 주문 목록 확인
6. 주문 상세 확인
7. 로그인
8. 회원 가입

## 화면

1. 홈 페이지 - `/`
2. 상품 목록 페이지 - `/products`
3. 상품 상세 페이지 - `/products/{id}`
4. 장바구니 페이지 - `/cart`
5. 주문 페이지 - `/order`
6. 주문 완료 페이지 - `/order/complete`
7. 주문 목록 페이지 - `/orders`
8. 주문 상세 페이지 - `/orders/{id}`
9. 로그인 페이지 - `/login`
10. 회원 가입 페이지 - `/signup`
11. 회원 가입 완료 페이지 - `/signup/complete`

## E2E test

[Codeceptjs](https://github.com/heyho00/shop-demo/blob/main/markdowns/codeceptjs.md)

## 추가 설치한 라이브러리

1. [React Router](https://github.com/remix-run/react-router)
2. [styled-components](https://github.com/styled-components/styled-components)
3. [styled-reset](https://github.com/zacanger/styled-reset)
4. [usehooks-ts](https://github.com/juliencrn/usehooks-ts)
5. [Axios](https://github.com/axios/axios): REST API 사용을 위한 HTTP 클라이언트.
6. [tsyringe](https://github.com/microsoft/tsyringe)
7. [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
8. [usestore-ts](https://github.com/seed2whale/usestore-ts)
9. [jest-dom](https://github.com/testing-library/jest-dom): React Testing Library에서 활용할 수 있는 DOM 확인용 Matcher 모음.
10. [MSW](https://github.com/mswjs/msw)

## styled-components, routes 준비

## Test Helper

테스트 코드에서 styled-components의 `Theme`과 React Router의 `Link` 등을 사용할 때 문제가 발생하지 않도록, React Testing Library의 render를 한번 감싼 테스트용 헬퍼 함수를 준비.

```tsx
import { render as originalRender } from '@testing-library/react';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';

export function render(element: React.ReactElement) {
  return originalRender((
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={defaultTheme}>
        {element}
      </ThemeProvider>
    </MemoryRouter>
  ));
}
```

## Types

기본적인 타입을 준비한다. 특별한 경우가 아니라면 미리 정한 용어집과 REST API 스펙에 맞추게 된다.

```js
export type Category = {
  id: string;
  name: string;
}

export type Image = {
  url: string;
}

export type ProductSummary = {
  id: string;
  category: Category;
  thumbnail: Image;
  name: string;
  price: number;
}

export type ProductOptionItem = {
  id: string;
  name: string;
};

export type ProductOption = {
  id: string;
  name: string;
  items: ProductOptionItem[];
};

export type ProductDetail = {
  id: string;
  category: Category;
  images: Image[];
  name: string;
  price: number;
  options: ProductOption[];
  description: string;
}

export type OrderOptionItem = {
  name: string;
};

export type OrderOption = {
  name: string;
  item: OrderOptionItem;
};

export type LineItem = {
  id: string;
  product: {
    id: string;
    name: string;
  };
  options: OrderOption[];
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export type Cart = {
  lineItems: LineItem[];
  totalPrice: number;
}
```

## store에서의 관심사 분리

store에서 axios를 분리해낸다.

여러 스토어가 생기면서 apiBaseUrl이 중복되기 때문.

이로써 중복이 제거되고, 만일 axios 대신 다른걸 써야하는 상황이 생겼을때

apiService에서만 수정하면 된다.

```js

// CategoriesStore.ts

import axios from "axios";
import { singleton } from "tsyringe";
import { Category } from "../types";
import { Action, Store } from "usestore-ts";
import { apiService } from "../services/ApiService";

// const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

@singleton()
@Store()
export default class CategoriesStore {
  categories: Category[] = [];

  async fetchCategories() {
    this.setCategories([]);

    // const { data } = await axios.get(`${apiBaseUrl}/categories`);
    // const { categories } = data;

    //스토어에서도 base_url읇 분리함으로써 관심사의 분리가 이뤄짐.
    // 저수준의 axios를 apiService에 숨겨줌.

    const categories = await apiService.fetchCategories()
    this.setCategories(categories);
  }

  @Action()
  setCategories(categories:Category[]) {
    this.categories = categories;
  }
}
```

