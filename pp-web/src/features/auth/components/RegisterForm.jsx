import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        <div>
          <RegisterInput placeholder="First name" />
        </div>
        <div>
          <RegisterInput placeholder="Last name" />
        </div>
        <div>
          <RegisterInput placeholder="Email" />
        </div>
        <div>
          <RegisterInput placeholder="Phone number" />
        </div>
        <div className="col-span-full">
          <RegisterInput placeholder="Password" />
        </div>
        <div className="col-span-full">
          <RegisterInput placeholder="Confirm Password" />
        </div>

        <div>
          <RegisterInput placeholder="Province" />
        </div>
        <div>
          <RegisterInput placeholder="District" />
        </div>
        <div>
          <RegisterInput placeholder="Country" />
        </div>
        <div>
          <RegisterInput placeholder="Sub-district" />
        </div>
        <div>
          <RegisterInput placeholder="Phone number" />
        </div>
        <div>
          <RegisterInput placeholder="Post code" />
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
