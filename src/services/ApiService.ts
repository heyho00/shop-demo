import axios from "axios";
import { Category, ProductSummary } from "../types";

const API_BASE_URL = process.env.API_BASE_URL
                     || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  async fetchProducts({categoryId}:{categoryId?:string}={}): Promise<ProductSummary[]> {
    // const { data } = await this.instance.get('/products?categoryId'); 두가지 방법
    const { data } = await this.instance.get('/products',{
      params: { categoryId }
    });
    const { products } = data;
    return products;
  }
}

export const apiService = new ApiService();