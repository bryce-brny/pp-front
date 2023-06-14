import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { changeProduct, removeProduct } from "../../store/slice/product-slice";
//import { addToCart } from "../../store/slice/cart-slice";
// import { addNewProduct } from "../../store/slice/product-slice";
import { useState } from "react";
import AddProductInput from "../addproduct/components/AddProductInput";
import { useEffect } from "react";
import AdminContainer from "./AdminContainer";

const initialInput = {
  productName: "",
  brand: "",
  color: "",
  price: "",
  discountPrice: "",
  size: "",
  stock: "",
  productDesc: "",
  status: "",
  image: "",
};

export default function AdminCard({ button02 }) {
  const product = useSelector((state) => state.product.homeProducts);
  // console.log(product);
  const [input, setInput] = useState(product);
  // const [open, setOpen] = useState(false);
  // const [title, setTitle] = useState(id);
  // console.log(product);
  const dispatch = useDispatch();

  //   const handleAddToCart = (product) => {
  //     dispatch(addToCart(product));
  //   };

  const handleDelete = (id) => {
    //
    dispatch(removeProduct(id));
  };

  useEffect(() => {
    setInput(product);
  }, [product]);

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {product?.map?.((item, index) => (
          <div className=" m-auto" key={index}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <Link to={`/product/${item.id}`}>
                <figure>
                  <img
                    className=""
                    src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
                    alt="buz"
                  />
                </figure>
              </Link>

              <div className="card-body">
                <h2 className="card-title">{item.brand}</h2>

                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <AdminContainer item={item} button01="edit" />

                  <button
                    className="btn btn-primary"
                    onClick={() => handleDelete(item.id)}
                  >
                    {button02}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
