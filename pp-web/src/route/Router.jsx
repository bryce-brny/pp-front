import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  { path: "/", element: <HomePage /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/order", element: <OrderPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
