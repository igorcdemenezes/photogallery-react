import { products } from "../../products";
import Card from "../components/Card/Card";

export default function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
