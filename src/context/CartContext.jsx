import {reateContext, useContext, useEffect} from 'react';
import profile from '../data/profile.json'

import React from 'react'

function CartContext() {
    let carrito = [];

useEffect(()=> carrito.length != profile.cart.length ? carrito = [... profile.cart, carrito] : carrito = carrito)
  return (
    <div>CartContext</div>
  )
}

export default CartContext