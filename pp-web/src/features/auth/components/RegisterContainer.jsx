import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold px-4"
        onClick={() => setOpen(true)}
      >
        Register
      </button>
      <Modal title="Sign up" open={open} onClose={() => setOpen(false)}>
        <RegisterForm />
      </Modal>
    </div>
  );
}
