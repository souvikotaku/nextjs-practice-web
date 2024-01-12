"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productArray = [
  {
    productId: 1,
  },
  {
    productId: 2,
  },
];

const ProductList = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productArray &&
          productArray.map((item, index) => {
            const isActive = pathname.startsWith(
              `/products/${item?.productId}`
            );

            return (
              <li>
                <Link
                  href={`/products/${item?.productId}`}
                  className={isActive ? "text-blue-500" : "text-black"}
                >
                  Product {item?.productId}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductList;
