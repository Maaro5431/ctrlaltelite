import React from 'react';

import { client } from 'D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/lib/client';/*change path*/
import  Product  from 'D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/components/Product';/*change path*/

const Home = ({ products }) => (
  <div>
    

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home;
