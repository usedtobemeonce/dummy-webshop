import React from 'react';

const Confirmed = () => {
  const orderNr = Math.floor(Math.random() * 1000000000);
  return (
    <>
      <h1>Order confirmed</h1>
      <p>Your order number is: <strong>{orderNr}</strong></p>
    </>
  )
}

export default Confirmed;