import { useState } from "react";
import { toast } from "react-toastify";
import validateRegister from "../validators/validate-register";
import InputErrorMessage from "./InputErrorMessage";
import RegisterInput from "./RegisterInput";
import * as authService from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  province: "",
  district: "",
  country: "",
  subDistrict: "",
  postCode: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        return setError(result);
      }
      setError({});

      const res = await authService.register(input);
      setAccessToken(res.data.setAccessToken);
    } catch (err) {
      toast.error("test error");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        <div>
          <RegisterInput
            name="firstName"
            placeholder="First name"
            value={input.firstName}
            onchange={handleChangeInput}
            isInvalid={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <RegisterInput
            name="lastName"
            placeholder="Last name"
            value={input.lastName}
            onchange={handleChangeInput}
            isInvalid={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div>
          <RegisterInput
            placeholder="Email"
            name="email"
            value={input.email}
            onchange={handleChangeInput}
            isInvalid={error.email}
          />
          {error.email && <InputErrorMessage message={error.email} />}
        </div>
        <div>
          <RegisterInput
            placeholder="Phone number"
            name="phoneNumber"
            value={input.phoneNumber}
            onchange={handleChangeInput}
            isInvalid={error.phoneNumber}
          />
          {error.phoneNumber && (
            <InputErrorMessage message={error.phoneNumber} />
          )}
        </div>
        <div className="col-span-full">
          <RegisterInput
            placeholder="Password"
            name="password"
            value={input.password}
            onchange={handleChangeInput}
            isInvalid={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            placeholder="Confirm Password"
            name="confirmPassword"
            value={input.confirmPassword}
            onchange={handleChangeInput}
            isInvalid={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>

        <div>
          <RegisterInput
            placeholder="Province"
            name="province"
            value={input.province}
            onchange={handleChangeInput}
            isInvalid={error.province}
          />
          {error.province && <InputErrorMessage message={error.province} />}
        </div>
        <div>
          <RegisterInput
            placeholder="District"
            name="district"
            value={input.district}
            onchange={handleChangeInput}
            isInvalid={error.district}
          />
          {error.district && <InputErrorMessage message={error.district} />}
        </div>
        <div>
          <RegisterInput
            placeholder="Country"
            name="country"
            value={input.country}
            onchange={handleChangeInput}
            isInvalid={error.country}
          />
          {error.country && <InputErrorMessage message={error.country} />}
        </div>
        <div>
          <RegisterInput
            placeholder="Sub-district"
            name="subDistrict"
            value={input.subDistrict}
            onchange={handleChangeInput}
            isInvalid={error.subDistrict}
          />
          {error.subDistrict && (
            <InputErrorMessage message={error.subDistrict} />
          )}
        </div>
        <div>
          <RegisterInput
            placeholder="Post code"
            name="postCode"
            value={input.postCode}
            onchange={handleChangeInput}
            isInvalid={error.postCode}
          />
          {error.postCode && <InputErrorMessage message={error.postCode} />}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
          Sign Up
        </button>
      </div>
    </form>
  );
}
