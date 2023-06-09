export default function CartPage() {
  return (
    <>
      {/* <div className="bg-green-500 border-b-2 border-black">
        <ul class="bg-green-500 h-16 flex items-center ml-4">
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">
              Active
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li class="mr-6">
            <a class="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div> */}
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div class="grid grid-cols-3 gap-4 h-0 bg-black">
          <div class="col-span-2 bg-orange-200 h-4/6 ">
            <div className="grid justify-items-center p-4 gap-4 h-full overflow-auto">
              <div className="w-4/5">
                <div className=" bg-green-300 border-none h-32  p-20 border-4 shadow flex justify-between items-center">
                  <div>img</div>
                  <div className="my-10 flex-col justify-evenly gap-10">
                    <div>name</div>
                    <div>size</div>
                    <button>Delete</button>
                  </div>
                  <div className="flex gap-4">
                    <button>-</button>
                    <div className="border h-fit w-10 text-center">1</div>
                    <button>+</button>
                  </div>
                  <div>
                    <div>price</div>
                  </div>
                </div>
              </div>
              <div className="w-4/5">
                <div className=" bg-green-300 border-none h-32 w-5/5 p-20 border-4 shadow"></div>
              </div>
              <div className="w-4/5">
                <div className=" bg-green-300 border-none h-32 w-5/5 p-20 border-4 shadow"></div>
              </div>
              <div className="w-4/5">
                <div className=" bg-green-300 border-none h-32 w-5/5 p-20 border-4 shadow"></div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 h-4/6">
            <div class="bg-gray-500 pt-4 px-10 flex flex-col gap-6">
              <div>
                <div className="text-3xl">quantity :</div>
              </div>
              <div>
                <div className="text-1xl invisible">color</div>
              </div>
              <div>
                <div className="text-2xl">number</div>
              </div>
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

            <div class="bg-red-300 grid grid-cols-3 gap-4 invisible">
              <div class="border border-black text-center" role="button">
                01
              </div>
              <div class="border border-black text-center" role="button">
                02
              </div>
              <div class="border border-black text-center" role="button">
                03
              </div>
              <div class="border border-black text-center" role="button">
                03
              </div>
              <div class="border border-black text-center" role="button">
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
