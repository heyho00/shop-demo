import { useEffectOnce, useFetch } from "usehooks-ts";
import { ProductSummary } from "../types";
import { container } from "tsyringe";
import ProductsStore from "../stores/ProductsStore";
import { useStore } from "usestore-ts";

// const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

// hook이 알 필요 없는것들 뺀다.

export default function useFetchProducts() {
  const store = container.resolve(ProductsStore)

  const [{products}] = useStore(store)

  useEffectOnce(() => {
    store.fetchProducts()
  })
  
  // type Data = {
  //   products: ProductSummary[];
  // };

  // const { data } = useFetch<Data>(`${apiBaseUrl}/products`);

  return {
    products
    };
}