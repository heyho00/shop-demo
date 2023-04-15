import { singleton } from "tsyringe";
import { OrderSummary } from "../types";
import { Action, Store } from "usestore-ts";
import { apiService } from "../services/ApiService";

@singleton()
@Store()
export default class OrderListStore {
  orders: OrderSummary[] = [];

  async fetchOrders() {
    this.setOrders([]);

    const orders = await apiService.fetchOrders();

    this.setOrders(orders);
  }

  @Action()
  setOrders(orders: OrderSummary[]) {
    this.orders = orders;
  }
}
