import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { validateLogin } from "../../../../back/src/validators/auth-validator";
import { addNewCart } from "../store/slice/cart-slice";

export default function ProductPage() {
  //   const [open, setOpen] = useState(false);
  const product = useSelector((state) => state.product.homeProducts);
  console.log("product ----------------------------", product);

  const [amount, setAmount] = useState(1);
  const [selected, setSelected] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  // console.log("param ---->", params); //บอกว่า อันที่ ID เท่าไร
  // console.log(params.productName, " params.productName");

  const [productitem] = product.filter((item) => item.id == +params.productID);
  // console.log([productitem]);
  // console.log("productitem ---->>---", productitem);

  const handleOnSelectSize = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    setSelected(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let input = { productId: productitem.id, size: selected };
    console.log({ productId: productitem.id, size: selected });
    dispatch(addNewCart(input));
    setSelected(null);
  };

  return (
    // <div className="text-3xl">{productitem?.brand} </div>
    <div className="flex flex-col">
      <div className="m-auto">
        <div className="card w-96 bg-base-100 shadow-xl overflow-hidden m-4 ">
          <figure>
            <img
              className=""
              src="https://pbs.twimg.com/media/DihOLoFVQAAKS7m?format=jpg&name=medium"
              alt="buz"
            />
          </figure>
        </div>
      </div>

      <form className="m-auto" onSubmit={submitForm}>
        <div className="card w-96 bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">{productitem?.brand}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions mt-4 flex flex-col justify-normal w-full h-[70px] overflow-x-auto">
              {productitem?.Sizes?.map?.((item, index) => (
                <button
                  role="button"
                  className={`btn btn-primary w-[90px] "text-white" ${
                    selected == item.size ? "" : "bg-gray-400"
                  }`}
                  key={item.id}
                  name="size"
                  value={item.size}
                  onClick={handleOnSelectSize}
                >
                  {item.size}
                </button>
              ))}

              {/* <button className="btn btn-primary w-[90px]">size</button> */}
            </div>
            <hr className="mt-2" />
            <button type="submit" className="btn btn-primary mt-4">
              add to cart
            </button>
            {/* กดแล้วเอาไปเก็ยใตาราง cart    ส่ง size+จำนวน     */}

            <Link to="/cart" className="">
              <button className="btn btn-primary w-full">goto cart</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
