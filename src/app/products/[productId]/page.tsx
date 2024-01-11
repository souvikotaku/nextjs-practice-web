"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface Paramprops {
  params: {
    productId: number;

    productDetails: {
      id: number;
      name: string;
      reviews?: {
        reviewId: number;
        review: string;
      }[];
    };
  };
}

const ProductDetails = ({ params }: Paramprops) => {
  useEffect(() => {
    console.log(params);
  }, []);
  return (
    <div>
      {`ProductDetails ${params?.productId}`}
      <Link
        href={`/products/${params?.productId}/reviews/${params?.productId}`}
      >
        click
      </Link>
    </div>
  );
};

export default ProductDetails;
