import { Link, useParams } from "react-router-dom";
import products from "..//data/data.js";

const SingleProduct = () => {

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <section className="sectionProduct">
      <h5>{product.name}</h5>
      <img src={product.image} name={product.name}/>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
