import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import Header from "../layouts/Header";
// import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
// import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";
// import HistoryPage from "../pages/HistoryPage";
import Container from "../layouts/Container";
// import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";
import AddProductPage from "../pages/AddProductPage";
import Footer from "../layouts/Footer";
// import ConfirmPurchase from "../pages/";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import PaymentPage from "../pages/PaymentPage";
import ProtectedRouteAdmin from "../features/auth/components/ProtectedRouteAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
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
        element: <HomePage />,
      },

      { path: "/product", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/order", element: <OrderPage /> },
      { path: "/product/:productID", element: <ProductPage /> },
      { path: "/payment", element: <PaymentPage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/addproductpage", element: <AddProductPage /> },

      // { path: "/history", element: <HistoryPage /> },
      // { path: "/profile", element: <ProfilePage /> },
      // { path: "/product/:productID", element: <ProductPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
