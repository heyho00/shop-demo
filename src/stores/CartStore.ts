import { singleton } from "tsyringe";
import { Store, Action } from "usestore-ts";
import { Cart } from "../types";
import { apiService } from "../services/ApiService";

@singleton()
@Store()
export default class CartStore {
  cart: Cart | null = null;

  async fetchCart() {
    this.setCart(null);

    const cart = await apiService.fetchCart();

    this.setCart(cart);
  }

  @Action()
  setCart(cart: Cart | null) {
    this.cart = cart;
  }
}