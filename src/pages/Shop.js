import React from 'react';
import "./Shop.css";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import img1 from "./images/upcycle1.jpeg";
import img2 from "./images/upcycle3.jpeg";
import img3 from "./images/upcycle4.jpeg";
import img4 from "./images/upcycle8.jpeg";
import img5 from "./images/upcycle9.jpeg";
import img6 from "./images/upcycle10.jpeg";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Shop() {

    const products = [
      {name: 'Wall decoration', price: 12.99, description: 'Made from dresses, by Shaheen and Zainub', points: 7, i: img1},
      {name: 'Floor mat', price: 15.99, description: 'Made from jeans by Zayn and Sara', points: 27.8, i: img2},
      {name: 'Floor mat', price: 15.99, description: 'Made from jumpers by Oli and John', points: 39.5, i: img3},
      {name: 'Ties wreath', price: 17.99, description: 'Made from ties by Amanda and Lily', points: 7, i: img4},
      {name: 'Pillow cover', price: 15.99, description: 'Made from pyjamas by Manny and Zafa', points: 13.9, i: img5},
      {name: 'Curtains', price: 20.99, description: `Made from kids' T-shirts by Dan`, points: 28, i: img6}
    ]

    return (
      <>
      <div class="how-title"> Sustainable touch to your home </div>
      <div class="shop-container">
      {products.map(ele => {
        return (
          <>
        <div class="item-container">
        <div class="item">
        <img alt="complex" src={ele.i} class="item-img"/>
        <div class="item-info">
          <p class="item-name">{ele.name}</p>
          <p>{ele.description}</p>
          <small>Impact points: {ele.points}kg carbon 👣</small>
        </div>
        <div class="item-price">
            <p class="item-p">£{ele.price}</p>
        </div>
        </div>
        <div class="btns">
            <button class="item-btn">Quick Add</button>
            <button class="item-btn">Details</button>
        </div>
        </div>
        </>
        )
      })}
      </div>
      </>
    )
}
 
export default Shop;