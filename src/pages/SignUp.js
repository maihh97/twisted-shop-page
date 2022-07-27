import React from 'react';
import "./Signup.css";
import vibes from "./images/greenvibes.png"

function Signup() {
    return (
        <>
        <div class="how-title"> Make an impact with us </div>
        <div class="news-container">
        <h2>Sign up to receive our latest developments and offers</h2>
        <div class="form-box">
            <form>
                <label for="email">Name: </label>
                <input type="text"></input>
                <label for="email">Email: </label>
                <input type="text"></input>
                
            </form>
            <input type="radio"></input>
            <label for="email">By submitting, you agree to subscribe to our newsletter </label>
            <button id="su-btn">Sign up</button>
        </div>

        <img src={vibes} class="vibes-img"></img>
        </div>
        </>
    )
}
 
export default Signup;