import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 text-xl">
        <div className="invisible">&#10005;</div>
        <div className="font-bold">Login</div>
        <div className="invisible">&#10005;</div>
      </div>
      <div>
        <form>
          <div className="grid gap-4">
            <div>
              <LoginInput placeholder="Email address or phone number" />
            </div>
            <div>
              <LoginInput placeholder="Password" />
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
