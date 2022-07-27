import React from 'react';
import "./About.css";
import model from './images/upcyclecircular.png';

function About() {
    return (
        <>
        <div class="description">
        <h1>In the UK, 350,000 tonnes of still wearable clothing goes to landfill every year.</h1>
        <h2> Our planet mission </h2>
        <div class="abt">
        <p class="abt-p">Twisted was found in 2022 amid the humanity and climate change crisis. 
            We aim to reduce clothing waste to landfill by recycling and circulating unwanted clothes. <br></br>
            To achieve this, we focus on giving <strong>incentives</strong> and providing an alternative way for users to think about before disposing their clothes.  
            We want to empower everyone to start making small actions that counts. Collectively we can save our beautiful Earth.
        </p>
        <img src="https://masterx.iulm.it/wp-content/uploads/2022/02/53386063-10442745-image-a-20_1643186950597.jpg" class="abt-img"></img>
        </div>
        <br></br>
        <hr></hr>
        <h1>Around 70% of refugees are unemployed despite being highly-skilled.</h1>
        <h2> Our social mission </h2>
        <div class="abt">
        <img src="https://scd.infomigrants.net//media/resize/my_image_big/16a08c1d3521022fa39f57d08fe5df80c00e43ec.jpeg" class="abt-img"></img>
        <p class="abt-p">Our recyled products are made from refugees. Refugees who came to the UK face various challenges to get a job: legal constraints, language barriers and lack of in-country experiences.
           We aim to provide refugees with employment that acts as a first point of entry to the UK job market. 
           This will allow them to support their family, integrate into a new life in the UK and later land a job that suits with their skillset.     
        </p>
        </div>
        <br></br>
        <hr></hr>
        <h1>Towards a circular economy</h1>
        <h2>Our circular model</h2>
        <div class="abt">
        <p class="abt-p">For every unwanted clothes we receive, we will assess its condition, upcycle and give it another life by turning it to appropriate products (ranging from fashion to household products such as mats, mops or cleaning cloth). 
        <br></br>
        The products will be resold or returned to the owner for reuse until they are no longer wanted and passed on to the next recycling cycle. No clothes will be wasted. 
        </p>
        <img src ={model} class="img-model"></img>
        </div>
        </div>
        </>
    )
}
 
export default About;