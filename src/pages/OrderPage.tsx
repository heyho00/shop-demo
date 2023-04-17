import CartView from "../components/cart/CartView";
import OrderForm from "../components/new-order/OrderForm";
import useFetchCart from "../hooks/useFetchCart";

export default function OrderPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <div>
      <OrderForm cart={cart} />
    </div>
  );
}
