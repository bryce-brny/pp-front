import { useState } from "react";
import Modal from "../../../components/Modal";
import CartForm from "./CartForm";

export default function CartContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <button
          className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold px-4"
          onClick={() => setOpen(true)}
        >
          Add to cart
        </button>
        <Modal
          title="shopping or payment"
          open={open}
          onClose={() => setOpen(false)}
        >
          <CartForm />
        </Modal>
      </div>
    </>
  );
}
