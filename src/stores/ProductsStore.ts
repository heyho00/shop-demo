import axios from "axios";
import { singleton } from "tsyringe";
import { ProductSummary } from "../types";
import { Action, Store } from "usestore-ts";
import { apiService } from "../services/ApiService";

@singleton()
@Store()
export default class ProductsStore {
  fetchCategories() {
      throw new Error("Method not implemented.");
  }
  products: ProductSummary[] = [];

  async fetchProducts({categoryId}:{categoryId?:string}) {
    this.setProducts([]);

    const products = await apiService.fetchProducts({categoryId})
    this.setProducts(products);
  }

  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}