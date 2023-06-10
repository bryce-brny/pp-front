import { useState } from "react";
import Modal from "../components/Modal";
import CartContainer from "../features/auth/components/CartContainer";
import RegisterContainer from "../features/auth/components/RegisterContainer";
import RegisterForm from "../features/auth/components/RegisterForm";

export default function ProductPage() {
  //   const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-green-500 border-b-2 border-black">
        <ul className="bg-green-500 h-16 flex items-center ml-4">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Active
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-orange-200">
            <div>
              <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
                <img
                  className="p-8"
                  src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
                  alt="buz"
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-500">
            <div className="bg-gray-500 pt-4 px-10 flex flex-col gap-6">
              <div>
                <div className="text-3xl">name version </div>
              </div>
              <div>
                <div className="text-1xl">color</div>
              </div>
              <div>
                <div className="text-2xl">price</div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

            <div className="bg-red-300 grid grid-cols-3 gap-4">
              <div className="border border-black text-center" role="button">
                01
              </div>
              <div className="border border-black text-center" role="button">
                02
              </div>
              <div className="border border-black text-center" role="button">
                03
              </div>
              <div className="border border-black text-center" role="button">
                03
              </div>
              <div className="border border-black text-center" role="button">
                03
              </div>
            </div>

            <div className="text-center my-12">
              <h1>Counter :</h1>
              <div className="flex gap-4 justify-center my-2">
                <button>-</button>
                <button>reset</button>
                <button>+</button>
              </div>
            </div>

            <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold px-4">
              {/* <CartContainer /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
