import { container } from "tsyringe";
import OrderDetailStore from "../stores/OrderDetailStore";
import { useStore } from "usestore-ts";
import { useEffect } from "react";

export default function useFetchOrder({ orderId }: { orderId: string }) {
  const store = container.resolve(OrderDetailStore);

  const [{ order, loading, error }] = useStore(store);

  useEffect(() => {
    store.fetchOrder({ orderId });
  }, [store]);

  return { order, loading, error };
}
