import React from "react";

interface Docparams {
  params: {
    slug: string[];
  };
}

const Docs = ({ params }: Docparams) => {
  {
    if (params?.slug?.length === 1) {
      return <div>Docs feature</div>;
    } else if (params?.slug?.length === 2) {
      return <div>Docs feature 2</div>;
    } else {
      return <div>Docs</div>;
    }
  }
};

export default Docs;
