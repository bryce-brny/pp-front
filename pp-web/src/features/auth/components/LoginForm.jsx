import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { login } from "../slice/auth-slice";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      toast.success("Login success");
    } catch (err) {
      toast.error("invalid email");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 text-xl">
        <div className="invisible">&#10005;</div>
        <div className="font-bold">Login</div>
        <div className="invisible">&#10005;</div>
      </div>
      <div>
        <form onSubmit={handleSubmitForm(onSubmit)}>
          <div className="grid gap-4">
            <div>
              <LoginInput
                placeholder="Email address"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                isInvalid={error.email}
              />
              <InputErrorMessage message={error.email} />
            </div>
            <div>
              <LoginInput
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                isInvalid={error.password}
              />
              <InputErrorMessage message={error.password} />
            </div>
            <div className="text-center">
              <button className=" btn w-full">Log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
