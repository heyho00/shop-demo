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