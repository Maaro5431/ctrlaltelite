import React from 'react';

import { client } from 'E:/ecommerce/ctrlaltelite/lib/client';/*change path*/
import  Product  from 'E:/ecommerce/ctrlaltelite/components/Product';/*change path*/

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
