import React from "react";
import Link from "next/link";

const productArray = [
  {
    productId: 1,
    productDetails: {
      id: 1,
      name: "lorem",
      reviews: [
        {
          reviewId: 1,
          review: "review1",
        },
        {
          reviewId: 2,
          review: "review2",
        },
      ],
    },
  },
  {
    productId: 2,
    productDetails: {
      id: 2,
      name: "lorem",
      reviews: [
        {
          reviewId: 1,
          review: "review1",
        },
        {
          reviewId: 2,
          review: "review2",
        },
      ],
    },
  },
];

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productArray &&
          productArray.map((item, index) => (
            <li>
              <Link href={`/products/${item?.productId}`}>
                Product {item?.productId}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
