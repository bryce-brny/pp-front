import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      {/* <button className=" btn w-full">Log in</button> */}
      <button
        className="btn w-full border border-black"
        onClick={() => setOpen(true)}
      >
        Register
      </button>
      <Modal title="Sign up" open={open} onClose={() => setOpen(false)}>
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
