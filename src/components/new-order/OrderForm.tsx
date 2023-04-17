import styled from "styled-components";
import { Cart } from "../../types";

import Table from "../line-item/Table";
import Button from "../ui/Button";
import ShippingForm from "./ShippingForm";

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

      <Button onClick={() => {}}>결제</Button>
    </Container>
  );
}
