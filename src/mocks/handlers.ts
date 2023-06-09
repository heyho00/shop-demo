import { rest } from "msw";

import { ProductSummary } from "../types";

import fixtures from "../../fixtures";
import orders from "../../fixtures/orders";

const BASE_URL = "https://shop-demo-api-02.fly.dev";

const productSummaries: ProductSummary[] = fixtures.products.map(
  (product: {
    id: any;
    category: any;
    images: any[];
    name: any;
    price: any;
  }) => ({
    id: product.id,
    category: product.category,
    thumbnail: product.images[0],
    name: product.name,
    price: product.price,
  })
);

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) =>
    res(ctx.json({ categories: fixtures.categories }))
  ),
  rest.get(`${BASE_URL}/products`, (req, res, ctx) =>
    res(ctx.json({ products: productSummaries }))
  ),
  rest.get(`${BASE_URL}/products/:id`, (req, res, ctx) => {
    const product = fixtures.products.find(
      (i: { id: string | readonly string[] }) => i.id === req.params.id
    );
    if (!product) {
      return res(ctx.status(404));
    }
    return res(ctx.json(product));
  }),
  rest.get(`${BASE_URL}/cart`, (req, res, ctx) => res(ctx.json(fixtures.cart))),
  rest.post(`${BASE_URL}/cart/line-items`, (req, res, ctx) =>
    res(ctx.status(201))
  ),
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) => res(ctx.json({ orders }))),
  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => {
    const order = fixtures.orders.lineItems.find((i) => i.id === req.params.id);
    if (!order) {
      return res(ctx.status(404));
    }
    return res(ctx.json(order));
  }),
  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => res(ctx.status(201))),
];

export default handlers;
