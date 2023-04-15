import { singleton } from "tsyringe";
import { Action, Store } from "usestore-ts";
import { OrderDetail, nullOrderDetail } from "../types";
import { apiService } from "../services/ApiService";

@singleton()
@Store()
export default class OrderDetailStore {
  order: OrderDetail = nullOrderDetail;

  loading = true;

  error = false;

  async fetchOrder({ orderId }: { orderId: string }) {
    this.startLoading();

    try {
      const order = await apiService.fetchOrder({ orderId });
      this.setOrder(order);
    } catch {
      this.setError();
    }
  }

  @Action()
  private startLoading() {
    this.order = nullOrderDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  private setOrder(order: OrderDetail) {
    this.order = order;
    this.loading = false;
    this.error = false;
  }

  @Action()
  private setError() {
    this.order = nullOrderDetail;
    this.loading = false;
    this.error = true;
  }
}
