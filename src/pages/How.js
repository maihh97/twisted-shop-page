import React from 'react';
import "./How.css";
import collect from "./images/collect.png";
import cash from "./images/cashon.png";
import choose from "./images/choose.png";
import dashboard from "./images/impact1.png";
import impact from "./images/impact.png";
import shop from "./images/shop.png";

function How() {
    return (
        <>
        <div class="container">
        <div class="how-title"> Give a new life to your clothes in the simplest way </div>
        <div class="instructions-box">
            <div class="steps">
                <h2>Step 1</h2>
                <h3>Order your collection</h3>
                <p>Download our app or sign up online </p>
                <div class="single-img">
                    <img src={collect} class="icon-how"></img>
                </div>
            </div>
            
            <div class="steps">
                <h2>Step 2</h2>
                <h3>Give or take</h3>
                <p>Choose whether you want to receive the 'twisted' product or receive a small monetary reward for your contribution. </p>
                <div class="imgs">
                    <img src={choose} class="icon-how"></img>
                    <img src={cash} class="icon-how"></img>
                </div>
            </div>
            <div class="steps">
                <h2>Step 3</h2>
                <h3>Your impact</h3>
                <p>View your impact dashboard. For every clothes you give us, you will know its new life and the impact you have made.</p>
                <div class="imgs">
                    <img src={dashboard} class="icon-how"></img>
                    <img src={impact} class="icon-how"></img>
                </div>
            </div>
            <div class="steps">
                <h2>Step 4</h2>
                <h3>Increase your impact</h3>
                <p>Shop with us and get more impact points!</p>  
                <div id="sgl-img">
                    <img src={shop} class="icon-how"></img>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
 
export default How;