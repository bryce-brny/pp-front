import LoginForm from "../features/auth/components/LoginForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";
import backgroundImage01 from "../assets/background01.jpg";

export default function LoginPage() {
  return (
    <div
      className="bg-white p-10 flex justify-center items-center h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage01})` }}
    >
      {/* <div className="mt-10 min-[900px]:mt-0 min-[900px]:basis-[24.75rem] bg-white"> */}
      <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4 w-1/3">
        <LoginForm />
        <hr className="my-5 border-gray-300" />

        <div className="flex justify-center pt-1 pb-2 ">
          <div className="bg-white">
            <RegisterContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
