import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import Header from "../layouts/Header";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";
import HistoryPage from "../pages/HistoryPage";
import Container from "../layouts/Container";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";
import AddProductPage from "../pages/AddProductPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          // <ProtectedRoute>
          <HomePage />
          // <Header />
          // </ProtectedRoute>
        ),
      },
      { path: "/history", element: <HistoryPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/order", element: <OrderPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/addproductpage", element: <AddProductPage /> },
      { path: "/product/:productID", element: <ProductPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
