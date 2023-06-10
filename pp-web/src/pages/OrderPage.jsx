import RegisterInput from "../features/auth/components/RegisterInput";

export default function OrderPage() {
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
        <div className="grid grid-cols-3 gap-4 h-0 bg-black">
          <div className="col-span-2 bg-orange-200 h-5/6 gap-4 overflow-auto">
            <div>
              <div className="font-bold text-center pt-9">Address</div>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 p-10">
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
              <div className="border border-black h-4/6 ">
                <img
                  src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <button>Upload</button>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 h-5/6">
            <div className="bg-gray-500 pt-4 px-10 flex flex-col gap-6">
              <div>
                <div className="text-3xl">quantity :</div>
              </div>
              <div>
                <div className="text-1xl invisible">color</div>
              </div>
              <div>
                <div className="text-2xl">number</div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

            <div className="bg-red-300 grid grid-cols-3 gap-4 invisible">
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

            <div className="text-center my-12 ">
              <h1 className="invisible">Counter :</h1>
              <div className="flex justify-between my-2 px-3">
                <div>Total Price</div>
                <div>price</div>
              </div>
              <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold px-4 mt-2">
                order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
