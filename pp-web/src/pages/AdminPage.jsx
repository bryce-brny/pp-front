// import { link } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductApi } from "../api/product-api";
// import ProductContainer from "../features/product/ProductContainer";
// import ProductContainer from "../features/auth/components/ProductContainer";
import { setProducts } from "../store/slice/product-slice";
// import Modal from "../components/Modal";
// import RegisterForm from "../features/auth/components/RegisterForm";
import AdminCard from "../features/Admin/AdminCard";

export default function AdminPage() {
  //HomePage
  // const product = useSelector((state) => state.product.homeProducts);
  const dispatch = useDispatch();

  const getProduct = async () => {
    const res = await getProductApi();

    dispatch(setProducts(res.data.product));
  };

  useEffect(() => {
    getProduct();
  }, []);
  // console.log(product);
  return (
    <>
      <div className="flex justify-center">
        <div className="carousel w-5/5 overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              className=""
              src="https://cheezelooker.com/file_managers/uploads/file_managers/source/2020%20DAILY%20CULTURE/OCTOBER/WEEK%202/CARNIVAL/3b17eadf-d727-4b15-bfe0-4a22d8b78ee8.jpg"
              alt="buz"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              className=""
              src="https://www.whitesp-ce.com/wp-content/uploads/2020/06/Carnival_08-lowres_2.png"
              alt="buz"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* <div id="slide3" className="carousel-item relative w-full">
            <img
              className=""
              src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
              alt="buz"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
          {/* <div id="slide4" className="carousel-item relative w-full">
            <img
              className=""
              src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
              alt="buz"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
        </div>
        {/* <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          <img
            className=""
            src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
            alt="buz"
          />
        </div> */}
        {/* <ProductContainer /> */}
      </div>

      <div className="card-actions justify-center p-10">
        <Link to="/addproductpage">
          <button className="btn btn-primary">ADD</button>
        </Link>
      </div>

      <div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
          {/* <div className="grid gap-10 md:grid-cols-2 lg:gap-10 "> */}
          {/* {product?.map?.((item, index) => (
              <div className="bg-red-500" key={index}>
                {item.brand} <div>{item.color}</div>
              </div>
            ))} */}

          <AdminCard button01="Edit" button02="Delete" id={1} />
        </div>
      </div>
    </>
  );
}
