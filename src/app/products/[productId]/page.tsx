import React, { useEffect } from "react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: {
    productId: number;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return { title: `product ${params?.productId}` };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      {`ProductDetails ${params?.productId}`}
      <Link href={`/products/${params?.productId}/reviews`}>click</Link>
    </div>
  );
};

export default ProductDetails;
