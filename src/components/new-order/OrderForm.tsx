import styled from "styled-components";
import { Cart } from "../../types";

import Table from "../line-item/Table";
import ShippingForm from "./ShippingForm";
import PaymentButton from "./PaymentButton";

const Container = styled.div`
  h2 {
    font-size: 4rem;
  }
`;

type OrderFormProps = {
  cart: Cart;
};
export default function OrderForm({ cart }: OrderFormProps) {
  return (
    <Container>
      <h2>주문</h2>
      <Table lineItems={cart.lineItems} totalPrice={cart.totalPrice} />

      <ShippingForm />

      <PaymentButton cart={cart} />
    </Container>
  );
}
