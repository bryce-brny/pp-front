import { useDispatch } from "react-redux"; // 1
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/slice/cart-slice";
// import { addNewProduct } from "../../store/slice/product-slice";

export default function ProductContainer({ button }) {
  const product = useSelector((state) => state.product.homeProducts);
  // console.log(product);
  const dispatch = useDispatch(); //2

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // 3
  };

  // const handleAddProduct = (product) =>{
  //   dispatch(addNewProduct(product))
  // }

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {product?.map?.((item, index) => (
          <div className=" m-auto " key={index}>
            <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
              <Link to={`/product/${item.id}`}>
                <figure>
                  <img
                    className=""
                    src="https://pbs.twimg.com/media/DihOLoFVQAAKS7m?format=jpg&name=medium"
                    alt="buz"
                  />
                </figure>
              </Link>

              <div className="card-body">
                <h2 className="card-title">{item.brand}</h2>

                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    {button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
