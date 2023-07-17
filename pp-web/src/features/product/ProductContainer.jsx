import { useDispatch } from "react-redux"; // 1
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { addToCart } from "../../store/slice/cart-slice";
// import { addNewProduct } from "../../store/slice/product-slice";

export default function ProductContainer() {
  const product = useSelector((state) => state.product.homeProducts);
  console.log(product);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(product);
  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product)); // 3
  // };

  // const handleAddProduct = (product) =>{
  //   dispatch(addNewProduct(product))
  // }

  return (
    <>
      {isAuthenticated ? (
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {product?.map?.((item, index) => (
            <div className=" m-auto " key={index}>
              <Link to={`/product/${item.id}`}>
                <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
                  <figure>
                    <img
                      className=""
                      src="https://pbs.twimg.com/media/DihOLoFVQAAKS7m?format=jpg&name=medium"
                      alt="buz"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title">
                      {item.brand} {item.productName}
                    </h2>

                    <p>{item.productDesc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {product?.map?.((item, index) => (
            <div className=" m-auto " key={index}>
              <Link to="/">
                <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
                  <figure>
                    <img
                      className=""
                      src="https://pbs.twimg.com/media/DihOLoFVQAAKS7m?format=jpg&name=medium"
                      alt="buz"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title">
                      {item.brand} {item.productName}
                    </h2>

                    <p>{item.productDesc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
