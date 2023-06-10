import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );
  return (
    <div>
      <div className="flex justify-between items-center p-4 text-xl">
        <div className="invisible">&#10005;</div>
        <div className="font-bold">Login</div>
        <div className="invisible">&#10005;</div>
      </div>
      <div>
        <form onSubmit={handleSubmitForm((data) => {})}>
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
            <div>
              <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
