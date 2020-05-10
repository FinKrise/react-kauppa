import React from 'react';

const CartList = ({products, setProducts, addProduct, setPage}) => {
  let subtotal = 0;
  products.map(e => {
    subtotal += e.data.hinta * e.quantity;
  });

  let discount = 0;

  if(subtotal >= 500) {
    subtotal -= subtotal * 0.1;
    discount = 10;
  }
  else if(subtotal >= 250) {
    subtotal -= subtotal * 0.04;
    discount = 4;
  }
  else if(subtotal >= 100) {
    subtotal -= subtotal * 0.025;
    discount = 2.5;
  }

  let totalItems = 0;
  products.map(e => {
    totalItems += e.quantity;
  });

  let totalText = "Total " + subtotal + "€ with " + discount + "% discount";

console.log(setPage);
  if(products.length === 0) {
    return(
      <center>
      </center>
    )
  }
  else
  return(
    <center>
      <div className="Cart">
      <h2>Ostoskori</h2>
      <hr></hr>
      <button className="button-primary" onClick={e => setProducts([])}>Tyhjennä ostoskori</button>
      <table className="item-list">
        <tbody>
          <tr><th>Product</th><th></th><th>hinta</th><th>Amount</th><th>Total</th></tr>
          {products.map((e, index) => <CartItem key={index} item={e.data} quantity={e.quantity} handler={addProduct}/>)}
        </tbody>
      </table>
      <br/>
      <hr></hr>
      <button className="button-primary" onClick={e => setPage("Cart")}>Siirry ostoskoriin</button>
      </div>
    </center>
  )
}

const CartItem = ({item, quantity, handler}) => {
  return (
    <tr>
      <td>
      <img className="item-image" src={item.url} alt={item.title}></img></td>
      <td><p><b>{item.title}</b></p><p>{item.Description}</p></td>
      <td>{item.hinta}€</td><td><button className="btn-item" onClick={e => handler(item, quantity, 0)}>-</button> {quantity} <button className="btn-item" onClick={e => handler(item, quantity, 1)}>+</button></td>
      <td>{item.hinta * quantity}€</td>
    </tr>
  )
}
export default CartList;