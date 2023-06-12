// import { link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../api/product-api";
import { setProducts } from "../store/slice/product-slice";

export default function HomePage() {
  const product = useSelector((state) => state.product.homeProducts);
  const dispatch = useDispatch();

  const getProduct = async () => {
    const res = await getProductApi();

    dispatch(setProducts(res.data.product));
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);
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

      <div>
        <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          <img
            className=""
            src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
            alt="buz"
          />
        </div>
      </div>

      <div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {/* {product?.map?.((item, index) => (
              <div className="bg-red-500">{item.brand}</div>
            ))} */}
            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                {/* <link to="/product"> */}
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
                {/* </link> */}
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a className="relative block aspect-video"></a>
              </div>

              <div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                  nike
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800">
        <h1>asasdsad</h1>
      </div>
    </>
  );
}
