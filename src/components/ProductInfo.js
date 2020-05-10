import React, { useState } from 'react';
import '../App.css';

const ProductsItem = ({productData, buyhandler}) => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(productData);

    if(show) {
    return (
        <div className="product">
            <h1 onClick={e => setShow(false)}>{productData.title}</h1>
            <p>{product.description}</p>
            <h4>
            {product.hinta}<button onClick={e => buyhandler(productData, 1, 1)}>Lisää ostoskoriin</button>
            <button onClick={e => buyhandler(productData, 1, 0)}>tyhjennä ostoskorista</button>
            </h4>
            <img className="imageList" src={productData.url} ></img>
        </div>
    )
}  else {
    return (
    <div>
        <h1 onClick={e => setShow(true)}>{productData.title}</h1>
        <img className="imageList" src={product.url} ></img>
    </div>
    )
}


}
//yhden kuvan kutsuminen: <imageInfo imageData={images[0]}>/
const ProductsInfo = ({productInfo, buyhandler}) => {
    
    return (
        <div>
            <h1>Tuotteet: </h1>
            {productInfo.map((img, index) => (<ProductsItem productData={img} buyhandler={buyhandler} key={img.id}/>
            ))}
        </div>
    )
}



export default ProductsInfo;