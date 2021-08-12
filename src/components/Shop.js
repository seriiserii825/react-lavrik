import React, { useState } from "react";
import Counter from "./Counter";

const productsFromServer = [
  { id: 1, title: "First", price: 100, rest: 8, count: 1 },
  { id: 2, title: "Second", price: 200, rest: 4, count: 2 },
  { id: 3, title: "Third", price: 300, rest: 3, count: 3 }
];
const Shop = () => {
  const [products, setProducts] = useState(productsFromServer);
  return (
    <div className="shop">
      <div className="container">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          {products.map(({ id, title, price, count, rest }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{price}</td>
              <td><Counter max={rest}/></td>
              <td>{price}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
