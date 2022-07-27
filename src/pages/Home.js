import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div class="intro">
            <div class="intro-p">
                <h1 class="quote"> Made from yours, </h1>
                <h1 class="quote">  but twisted. </h1>
                <br></br>
                <div class="intro-choices">
                    <button><Link to="/signup" class="url"> Order a collection </Link></button>
                    <button><Link to="/Shop" class="url"> Shop </Link></button>
                </div>
            </div>
            <div class="banner-img">
                <img src="https://images.unsplash.com/photo-1566707675151-2aa31b81060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="banner-img" alt="banner"></img>
            </div>
        </div>
    )
}
 
export default Home;