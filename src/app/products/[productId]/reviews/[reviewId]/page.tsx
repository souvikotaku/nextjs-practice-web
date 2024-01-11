import React from "react";
interface Paramprops {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetails = ({ params }: Paramprops) => {
  return <div>ReviewDetails for {params?.reviewId}</div>;
};

export default ReviewDetails;
