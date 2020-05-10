import React, { useState } from 'react';
import './App.css';

import Data from './components/ProductData.js';
import ProductInfo from './components/ProductInfo.js';
import CartList from './components/cartList.js';

const App = () =>{
  const [page, setPage] = useState("");
  const [products, setProducts] = useState([]);

  function hasItem(data, item) {
    let i = -1;
    data.map((e, index) => {
      if(e.data.productID === item.productID) {
        i = index;
      }
    });
    return i;
  }


  const buyHandler = (item, quantity, type) => {
    let temp = [...products];

    if(type === 1) {
      const i = hasItem(temp, item);
      if(i >= 0) {
        temp[i].quantity++;
      }
      else {
        let data = {
          data: item,
          quantity: quantity
        }
        temp.push(data);
      }
    }
    else {
      const i = hasItem(temp, item);
      if(i >= 0 && quantity > 1) {
        temp[i].quantity--;
      }
      else {
       temp.splice(i, 1);
       console.log("Removing item");
     }
    }
    setProducts(temp);
  }


const [myData] = useState(Data);
//<img src={logo} className="App-logo" alt="logo" />
if (page === "Cart") {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="kauppaheader">Täytä ostostiedot</h1>
      </header>
      <form>
      <label for="fname">Sposti: </label>
      <input type="email" id="fname" name="fname"></input>
      <br></br>
      <label for="lname">Etunimi</label>
      <input type="text" id="lname" name="lname"></input>
      <br></br>
      <label for="lname">Sukunimi</label>
      <input type="text" id="lname" name="lname"></input>
      <br></br>
      <label for="lname">Osoite</label>
      <input type="text" id="lname" name="lname"></input>
      <br></br>
      <label for="lname">Postinumero</label>
      <input type="number" id="lname" name="lname"></input>
      <br></br>
      <label for="lname">Postitoimipaikka</label>
      <input type="text" id="lname" name="lname"></input>
      <br></br>
      <button type="submit" onClick={e => setPage("Confirm")}>Lähetä</button>
      </form>
      <p>That feeling when you need tech support, but you are tech support... #deep</p>
    </div>
  );
}

else if (page === "Confirm") {
  if (products.length >0) {
    setProducts([])
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="kauppaheader">Paketi tulee piupiu</h1>
      </header>
      <button onClick={e => setPage("")}>Menna osta uus mersu</button>
      <p>That feeling when you need tech support, but you are tech support... #deep</p>
    </div>
  );
}

else {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="kauppaheader" >Verkkokauppa</h1>
      <CartList products={products} setProducts={setProducts} addProduct={buyHandler} setPage={setPage}/>
      </header>
      <ProductInfo productInfo={myData} buyhandler={buyHandler}/>
      <p>That feeling when you need tech support, but you are tech support... #deep</p>
    </div>
  );
}

}
export default App;
