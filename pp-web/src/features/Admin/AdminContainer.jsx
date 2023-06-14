import { useState } from "react";
import { useDispatch } from "react-redux";
import AddProductInput from "../addproduct/components/AddProductInput";
import { useSelector } from "react-redux";
import { changeProduct } from "../../store/slice/product-slice";
import Modal from "../../components/Modal";

export default function AdminContainer({ item, button01 }) {
  const [open, setOpen] = useState(false);
  console.log(item);
  //   const product = useSelector((state) => state.product.homeProducts);
  const [input, setInput] = useState(item);
  const dispatch = useDispatch();

  const handleUpdate = (productUpdated) => {
    // console.log(productUpdated);
    dispatch(changeProduct(productUpdated));
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        {button01}
      </button>
      <Modal title="Edit Product" open={open} onClose={() => setOpen(false)}>
        <div className="p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(input);
              handleUpdate(input);
            }}
          >
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <div>
                <AddProductInput
                  name="productName"
                  // placeholder={item.productName}
                  value={input.productName}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="brand"
                  // placeholder="Brand"
                  value={input.brand}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="color"
                  // placeholder="Color"
                  value={input.color}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="price"
                  // placeholder="Price"
                  value={input.price}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="discountPrice"
                  // placeholder="Discount Price"
                  value={input.discountPrice}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="size"
                  // placeholder="Size"
                  value={input.size}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="stock"
                  // placeholder="Stock"
                  value={input.stock}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="productDesc"
                  // placeholder="Description"
                  value={input.productDesc}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="status"
                  // placeholder="Status"
                  value={input.status}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <AddProductInput
                  name="productImage"
                  // placeholder="image"
                  value={input.productImage}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-black hover:bg-gray-500 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
