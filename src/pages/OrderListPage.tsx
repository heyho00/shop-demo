import useFetchOrders from "../hooks/useFetchOrders";
import Orders from "../components/order-list/Orders";

export default function OrderListPage() {
  const { orders } = useFetchOrders();

  return (
    <div>
      <h2>주문 목록</h2>
      <Orders orders={orders} />
    </div>
  );
}
