import { container } from "tsyringe";
import OrderFormStore from "../stores/OrderFormStore";
import { useStore } from "usestore-ts";

export default function useOrderFormStore() {
  const store = container.resolve(OrderFormStore);
  return useStore(store);
}
