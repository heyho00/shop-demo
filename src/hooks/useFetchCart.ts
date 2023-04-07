import { container } from "tsyringe";
import { useEffectOnce } from "usehooks-ts";
import { useStore } from "usestore-ts";
import CartStore from "../stores/CartStore";

export default function useFetchCart() {
  const store = container.resolve(CartStore);

  const [{ cart }] = useStore(store);

  useEffectOnce(() => {
    store.fetchCart();
  });

  return { cart };
}