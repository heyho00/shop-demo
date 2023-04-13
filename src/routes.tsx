import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import SignupCompletePage from "./pages/SignupCompletePage";
import SignupPage from "./pages/SignupPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/signup/complete", element: <SignupCompletePage /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
];

export default routes;
