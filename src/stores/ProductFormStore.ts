import { singleton } from "tsyringe";
import { Action, Store } from "usestore-ts";
import { ProductDetail, nullProductDetail } from "../types";

@singleton()
@Store()
export default class ProductFormStore {
  product: ProductDetail = nullProductDetail;
  quantity = 1;

  @Action()
  setProduct(product: ProductDetail) {
    this.product = product;
  }
  @Action()
  changeQuantity(quantity: number) {
    if (quantity <= 0) {
      return;
    }
    if (quantity > 10) {
      return;
    }
    this.quantity = quantity;
  }

  get price() {
    return this.product.price * this.quantity;
  }
}
