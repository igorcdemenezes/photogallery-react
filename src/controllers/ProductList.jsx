import { products } from "../../products";
import Card from "../components/Card/Card";

export default function ProductList() {
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </>
  );
}
