import styled from "styled-components";
import { OrderDetail } from "../../types";
import Table from "../line-item/Table";
import { STATUS_MESSAGES } from "../../utils/const";

const Container = styled.div`
  dl {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.7;

    dt {
      width: 8rem;
    }

    dd {
      width: calc(100% - 8rem);
    }
  }
`;

type OrderProps = {
  order: OrderDetail;
};

export default function Order({ order }: OrderProps) {
  if (!order.lineItems.length) {
    return null;
  }

  return (
    <Container>
      <dl>
        <dt>주문 일시</dt>
        <dd>{order.orderedAt}</dd>
        <dt>주문 코드</dt>
        <dd>{order.id}</dd>
        <dt>주문 상태</dt>
        <dd>{STATUS_MESSAGES[order.status]}</dd>
      </dl>
      <Table lineItems={order.lineItems} totalPrice={order.totalPrice} />
    </Container>
  );
}
