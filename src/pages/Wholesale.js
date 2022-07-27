import React from 'react';
import "./Wholesale.css";

function Wholesale() {
    return (
        <>
        <div class="wholesale">
        <div class="how-title"> Embrace sustainability together </div>
        <div class="news-container">
        <h2>If you are looking for a responsible supplier, look no further</h2>
        <p class="ws-desc"> Contact us to receive tailored designs for your venues and advice on sustainable products </p>
        <div>
            <form class="ws-form">
                <div class="ws-input">
                    <label for="email">Company Name: </label>
                    <input type="text"></input>
                </div>
                <div class="ws-input">
                    <label for="email">Full Name: </label>
                    <input type="text"></input>
                </div>
                <div class="ws-input">
                    <label for="email">Email: </label>
                    <input type="text"></input>
                </div>
                <div class="ws-input">
                    <label for="email">Contact number: </label>
                    <input type="text"></input>
                </div>
            </form>
            <button id="ws-btn">Submit</button>
        </div>
        </div>
        </div>
        </>
        
        )
}
 
export default Wholesale;