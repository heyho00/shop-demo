import { container } from "tsyringe";
import OrderListStore from "../stores/OrderListStore";
import { useStore } from "usestore-ts";
import { useEffect } from "react";

export default function useFetchOrders() {
  const store = container.resolve(OrderListStore);

  const [{ orders }] = useStore(store);

  useEffect(() => {
    store.fetchOrders();
  }, [store]);

  return { orders };
}
