import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products!</h1>
      <ul>
        <li>
          <Link to="/products/p1">product1</Link>
        </li>
        <li>
          <Link to="/products/p2">product2</Link>
        </li>
        <li>
          <Link to="/products/p3">product3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
