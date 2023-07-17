import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import RegisterInput from "../features/auth/components/RegisterInput";
import {
  addNewCart,
  checkOutProduct,
  delCart,
  getAllCart,
  updateAddCart,
  updateSubtractCart,
} from "../store/slice/cart-slice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cartProduct);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const array = cart?.map?.(
    (item, index) => item.quantity * item.Product.price
  );

  console.log("qt", array);

  const initialValue = 0;
  const sumWithInitial = array?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log("sumWithInitial", sumWithInitial);

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

  console.log("========", cart);
  // console.log("includ Product", cart[0].Product?);

  const addCart = (item) => {
    console.log(item.id);
    dispatch(updateAddCart(item));
  };

  const subtractCart = (item) => {
    console.log(item.id);
    dispatch(updateSubtractCart(item));
  };

  const updateDelCart = (item) => {
    console.log("delcart", item);
    dispatch(delCart(item));
  };

  const handleOnClick = () => {
    console.log("dddd", sumWithInitial);
    dispatch(checkOutProduct({ totalPrice: sumWithInitial }));
    navigate("/order");
  };

  return (
    <div className="flex justify-center">
      <div className="m-10">
        {cart?.map?.((item, index) => (
          <div className="flex justify-center" key={item.id}>
            <div className="card card-side bg-base-100 shadow-xl w-[1000px] m-5">
              <figure>
                <img
                  className="w-[300px]"
                  src="https://pbs.twimg.com/media/DihOLoFVQAAKS7m?format=jpg&name=medium"
                  alt="buz"
                />
              </figure>
              <div className="card-body w-[500px]">
                <div className="flex gap-2">
                  <h2 className="card-title">{item.Product?.brand}</h2>
                  <h2 className="card-title">{item.Product?.productName}</h2>
                  <h2 className="card-title">{item.Product?.color}</h2>
                </div>
                <p>Size : {item.size}</p>
                <div className="card-actions justify-end">
                  <h5 className="m-auto">Price : {item.Product?.price}</h5>
                  <button
                    className="btn btn-primary w-[90px]"
                    onClick={() => addCart(item)}
                  >
                    +
                  </button>
                  <h3 className="m-auto">quantity : {item.quantity}</h3>
                  <button
                    className="btn btn-primary w-[90px]"
                    onClick={() => subtractCart(item)}
                  >
                    -
                  </button>
                  <h3 className="m-auto">
                    {item.Product?.price * item.quantity}
                  </h3>
                  <button
                    className="btn btn-primary w-[90px]"
                    onClick={() => updateDelCart(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            className="btn no-animation btn-success w-[1000px]"
            onClick={handleOnClick}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
