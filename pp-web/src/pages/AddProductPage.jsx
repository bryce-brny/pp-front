// import AdminInput from "../features/Admin/AdminInput";
import axios from "axios";
import { useState } from "react";
import AddProductInput from "../features/addproduct/components/AddProductInput";
import * as productService from "../api/product-api";
import { addNewProduct } from "../store/slice/product-slice";
import { useDispatch } from "react-redux";

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

export default function AddProductPage() {
  const [input, setInput] = useState(initialInput);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();
  //   // console.log(e);
  //   const res = await productService.addProduct(input);
  // };

  // console.log(input);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(input));
  };

  return (
    <>
      <div className="fixed inset-0 bg-white opacity-70 "></div>
      <div className="fixed inset-0 z-30 ">
        <div className="flex justify-center items-center min-h-full">
          <div className=" justify-center bg-white rounded-lg max-w-[27rem] shadow-md flex flex-col">
            <div className="flex justify-between p-4 border-b">
              <div className="invisible">z</div>
              <div className="text-xl font-bold">Add Product</div>
              <div
                className="text-gray-500 font-semibold hover:text-gray-600"
                role="button"
              >
                X
              </div>
            </div>
            <div className="p-4">
              <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  <div>
                    <AddProductInput
                      name="productName"
                      placeholder="Name"
                      value={input.productName}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="brand"
                      placeholder="Brand"
                      value={input.brand}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="color"
                      placeholder="Color"
                      value={input.color}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="price"
                      placeholder="Price"
                      value={input.price}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="discountPrice"
                      placeholder="Discount Price"
                      value={input.discountPrice}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="size"
                      placeholder="Size"
                      value={input.size}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="stock"
                      placeholder="Stock"
                      value={input.stock}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="productDesc"
                      placeholder="Description"
                      value={input.productDesc}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="status"
                      placeholder="Status"
                      value={input.status}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div>
                    <AddProductInput
                      name="image"
                      placeholder="image"
                      value={input.image}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="bg-black hover:bg-gray-500 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
