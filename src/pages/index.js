import React from "react";
import Link from "next/link";

import { client } from "D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/lib/client";
import { Product, HeadBanner } from "D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/components";

const Home = ({ products, bannerData }) => ( 
  <div class = 'welcome-div'>
    <div>
      <HeadBanner headBanner={bannerData.length && bannerData[0]} />
    </div>
    <div>
      <Link href={`/catalog`}>
        <button class="btn btn-outline-success">Shop</button>
      </Link>
      <Link href={`/sell`}>
        <button class="btn btn-outline-success">Sell</button>
      </Link>
    </div>

    <div>
      <div className="maylike-products-wrapper">
        <div class="section-divider">
          <h2 class="section-divider-text">Recently Added</h2>
        </div>

        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
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

export default Home;
