import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from "E:/ecommerce/ctrlaltelite/context/StateContext.js";
import { urlFor } from "E:/ecommerce/ctrlaltelite/lib/client";



const Navbar = ( ) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <img
            src={urlFor(
              "https://cdn.sanity.io/images/d9tlqs3r/production/59b74b590e8722aaa1c1e4828658d607650e0e50-1000x600.png"
            )}
            alt="Thrift Store"
            width="auto"
            height="100"
            class="d-inline-block align-text-top"
          />
        </Link>
        {/* add logo here  */}
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
}

export default Navbar