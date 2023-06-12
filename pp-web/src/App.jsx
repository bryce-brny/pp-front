import { useSelector } from "react-redux";
import Router from "./route/Router";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
// import authSlice from "./features/auth/slice/auth-slice";

function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </div>
  );
}

export default App;
