import axios from "axios";
import { singleton } from "tsyringe";
import { ProductSummary } from "../types";
import { Action, Store } from "usestore-ts";

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

@singleton()
@Store()
export default class ProductsStore {
  products: ProductSummary[] = [];

  async fetchProducts() {
    this.setProducts([]);

    const { data } = await axios.get(`${apiBaseUrl}/products`);
    const { products } = data;

    this.setProducts(products);
  }

  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}