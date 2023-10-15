import React from "react";

import { client } from "E:/ecommerce/ctrlaltelite/lib/client";
import { Product, HeadBanner } from "E:/ecommerce/ctrlaltelite/components";

const Catalog = ({ products, bannerData }) => (
  <div>
    {console.log(bannerData)}
    <div>
      <HeadBanner headBanner={bannerData.length && bannerData[0]} />
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Catalog;
