import { container } from "tsyringe";
import ProductsStore from "../stores/ProductsStore";
import { useStore } from "usestore-ts";
import { useEffect } from "react";

export default function useFetchProducts({
  categoryId,
}: {
  categoryId?: string;
}) {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [store, categoryId]);

  return {
    products,
  };
}
