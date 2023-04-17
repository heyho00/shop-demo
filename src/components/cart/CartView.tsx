import styled from "styled-components";
import { Cart } from "../../types";

import Table from "../line-item/Table";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

type CartViewProps = {
  cart: Cart;
};

export default function CartView({ cart }: CartViewProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order");
  };

  if (!cart.lineItems.length) {
    return <p>장바구니가 비었습니다</p>;
  }

  return (
    <div>
      <Table lineItems={cart.lineItems} totalPrice={cart.totalPrice} />
      <Button onClick={handleClick}>주문하기</Button>
    </div>
  );
}
