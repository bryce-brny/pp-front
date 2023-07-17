// import { link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductApi } from "../api/product-api";
import ProductContainer from "../features/product/ProductContainer";
// import ProductContainer from "../features/auth/components/ProductContainer";
import { setProducts } from "../store/slice/product-slice";

export default function HomePage() {
  // const product = useSelector((state) => state.product.homeProducts);
  const dispatch = useDispatch();

  const getProduct = async () => {
    const res = await getProductApi();
    dispatch(setProducts(res.data.product));
  };

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  useEffect(() => {
    getProduct();
  }, []);
  // console.log(product);
  return (
    <>
      <div className="flex justify-center">
        <div className="carousel w-full overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              className=""
              src="https://cheezelooker.com/file_managers/uploads/file_managers/source/2020%20DAILY%20CULTURE/OCTOBER/WEEK%202/CARNIVAL/3b17eadf-d727-4b15-bfe0-4a22d8b78ee8.jpg"
              alt="buz"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
          <ProductContainer />
        </div>
      </div>
    </>
  );
}
