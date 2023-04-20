import styled from "styled-components";
import { Cart } from "../../types";
import { useNavigate } from "react-router-dom";
import useOrderFormStore from "../../hooks/useOrderFormStore";
import usePayment from "../../hooks/usePayment";
import { useState } from "react";
import Button from "../ui/Button";

const Container = styled.div`
  p {
    margin-block: 2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
  }
`;

type PaymentButtonProps = {
  cart: Cart;
};

export default function PaymentButton({ cart }: PaymentButtonProps) {
  const navigate = useNavigate();

  const [{ valid }] = useOrderFormStore();

  const { requestPayment } = usePayment(cart);

  const [error, setError] = useState("");

  const handleClick = async () => {
    setError("");

    try {
      const { merchantId, transactionId } = await requestPayment();

      // TODO: B/E로 주문 및 결제 정보 전달.

      navigate("/order/complete");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Container>
      <Button onClick={handleClick} disabled={!valid}>
        결제
      </Button>
      {error && <p>{error}</p>}
    </Container>
  );
}
