import InputErrorMessage from "../features/auth/components/InputErrorMessage";
import RegisterInput from "../features/auth/components/RegisterInput";
import { Label } from "@radix-ui/react-label";
import { Input } from "../features/auth/components/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrder } from "../store/slice/order-slice";
import Modal from "../components/Modal";
import {
  editCountry,
  editDistrict,
  editPostcode,
  editProvince,
  editSubDistrict,
  getAddress,
  updateAddress,
  uploadImage,
} from "../store/slice/user-slice";
import { Link } from "react-router-dom";
import * as userService from "../api/user-api";

export default function OrderPage() {
  // const [files, setFiles] = useState({});
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [file, setFile] = useState(null);
  const [inputt, setInputt] = useState({
    orderId: "",
  });
  const address = useSelector((state) => state.user.address);
  const order = useSelector((state) => state.order.orderProduct);
  // const slip = useSelector((state) => state.user.slip);
  console.log("order", order);
  console.log(order[16]?.order_products[0].Product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrder());
    console.log("=====", getAllOrder());
  }, []);

  useEffect(() => {
    dispatch(getAddress());
    console.log("address", address);
  }, []);

  const handleClick = (item, index) => {
    console.log(order[index].id);
    setInputt(order[index].id);
    setProduct(item?.order_products);
    setOpen(true);
    console.log("product", product);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", file);

    const slipPath = await userService.uploadImage(inputt, formData);

    let input = {
      address: address.province,
      district: address.district,
      country: address.country,
      subDistrict: address.subDistrict,
      postCode: address.postCode,
    };
    console.log(input);
    dispatch(updateAddress(input));
  };

  const handleChangeFile = (e) => {
    console.log("e", e);
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    // <form onSubmit={handleSubmitForm}>
    <div className="flex justify-between p-10 h-auto">
      <div className="flex-col g-1">
        <div className="flex flex-col w-[50vw]">
          <div className="p-10 m-10 w-[50vw]">
            {order.map?.((item, index) => (
              <>
                <div
                  className="card card-side bg-base-100 shadow-xl w-[700px] h-[200px] m-5"
                  key={item.id}
                  onClick={() => handleClick(item, index)}
                >
                  <figure>
                    <img
                      className="w-[300px]"
                      src="https://pbs.twimg.com/media/DihOLoFVQAAKS7m?format=jpg&name=medium"
                      alt="buz"
                    />
                  </figure>
                  <div className="card-body w-[500px]">
                    <div className="flex gap-2">
                      <h2 className="card-title">order : {item.id}</h2>
                      <h2 className="card-title invisible">productName</h2>
                      <h2 className="card-title invisible">color</h2>
                    </div>
                    <p className="invisible">Size : </p>
                    <div className="card-actions justify-end">
                      <h5 className="m-auto invisible">Price : </h5>
                      {/* <button
                    className="btn btn-primary w-[90px]"
                    // onClick={() => addCart(item)}
                  >
                    +
                  </button> */}
                      <h3 className="m-auto invisible">quantity : quantity</h3>
                      {/* <button
                    className="btn btn-primary w-[90px]"
                    // onClick={() => subtractCart(item)}
                  >
                    -
                  </button> */}
                      <h3 className="m-auto invisible">total price</h3>
                      {/* <button
                    className="btn btn-primary w-[90px]"
                    // onClick={() => updateDelCart(item)}
                  >
                    Detail
                  </button> */}
                    </div>
                  </div>
                </div>
                <Modal title="Item" open={open} onClose={() => setOpen(false)}>
                  {product?.map((item, index) => (
                    <div className="" key={item.id}>
                      <h6>item : {index + 1} </h6>
                      <h6>brand : {item?.Product.brand} </h6>
                      <h6>price : {item?.Product.price} </h6>

                      <h6>=====================</h6>
                    </div>
                  ))}
                </Modal>
              </>
            ))}
          </div>
        </div>
      </div>

      <form className="w-1/2 p-10 mt-16" onSubmit={submitForm}>
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          <div>
            <RegisterInput
              placeholder="Province"
              name="province"
              value={address.province || ""}
              onchange={(e) => dispatch(editProvince(e.target.value))}
              // isInvalid={error.firstName}
            />
            {/* {error.province && <InputErrorMessage message={error.province} />} */}
          </div>
          <div>
            <RegisterInput
              placeholder="District"
              name="district"
              value={address.district || ""}
              onchange={(e) => dispatch(editDistrict(e.target.value))}
              // isInvalid={error.firstName}
            />
            {/* {error.district && <InputErrorMessage message={error.district} />} */}
          </div>
          <div>
            <RegisterInput
              placeholder="Country"
              name="country"
              value={address.country || ""}
              onchange={(e) => dispatch(editCountry(e.target.value))}
              // isInvalid={error.firstName}
            />
            {/* {error.country && <InputErrorMessage message={error.country} />} */}
          </div>
          <div>
            <RegisterInput
              placeholder="Sub-district"
              name="subDistrict"
              value={address.subDistrict || ""}
              onchange={(e) => dispatch(editSubDistrict(e.target.value))}
              // isInvalid={error.firstName}
            />
            {/* {error.subDistrict && (
            <InputErrorMessage message={error.subDistrict} />
          )} */}
          </div>
          <div>
            <RegisterInput
              placeholder="Post code"
              name="postCode"
              value={address.postCode || ""}
              onchange={(e) => dispatch(editPostcode(e.target.value))}
              // isInvalid={error.firstName}
            />
            {/* {error.postCode && <InputErrorMessage message={error.postCode} />} */}
          </div>

          <div className="mb-4 relative">
            <div className="flex justify-end">
              {!file ? (
                <Label
                  htmlFor="picture"
                  className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-16 text-center pl-1.5"
                >
                  upload your slip order
                </Label>
              ) : (
                ""
              )}
              {/* <Label
                htmlFor="picture"
                className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-16 text-center pl-1.5"
              >
                + Add your event profile image
              </Label> */}
            </div>
            <Input
              id="picture"
              type="file"
              name="image1"
              className="hidden"
              onChange={handleChangeFile}
            />
            <img
              src={file && URL.createObjectURL(file)}
              alt=""
              className="w-[320px] h-[190px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
            />
          </div>
          {/* ต้องเพิ่ม รูปในตารางที่เก็บ order ด้วย  */}
        </div>

        <div className="flex justify-center">
          <Link to="/payment" className="">
            <button
              className="btn no-animation btn-success w-[30vw]"
              // onClick={handleOnClick}
            >
              CONFIRM
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
