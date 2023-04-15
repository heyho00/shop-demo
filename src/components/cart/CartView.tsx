import styled from "styled-components";
import { Cart } from "../../types";

import Table from "../line-item/Table";

type CartViewProps = {
  cart: Cart;
};

export default function CartView({ cart }: CartViewProps) {
  if (!cart.lineItems.length) {
    return <p>장바구니가 비었습니다</p>;
  }

  return <Table lineItems={cart.lineItems} totalPrice={cart.totalPrice} />;
}
