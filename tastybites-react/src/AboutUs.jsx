import React, {useState} from 'react';
import applepieImage from './assets/apple-pie.jpg';
import cinnamonImage from './assets/cinnamon.jpg';
import donutsImage from './assets/donuts.jpg';

function AboutUs(){

    return(<>

    <br/><br/><br/><br/>
<h1 style={{ textAlign: 'center' }}>About Us</h1><br />
<section className="about-us" >
  <p>
    Welcome to <strong>TastyBites</strong> 🍴 – your go-to place for delicious and easy-to-follow recipes!  
    Our goal is to inspire everyone to enjoy cooking at home with simple, fresh, and tasty ingredients.  
    Whether you’re a beginner in the kitchen or a food enthusiast, you’ll find recipes that bring flavor 
    and joy to your table.  
  </p>
  <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
    Cooking is not just about food – it’s about sharing moments, creating memories, and enjoying life.  
    Let’s cook together and make every meal special! 🥘✨
  </p>
</section>
<br/><br/>
<div className="pictures" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', alignItems: 'center' }}>
  <img src={cinnamonImage} alt="Delicious Pasta" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
  <img src={applepieImage} alt="Fresh Salad" style={{ width: '300px', height: '250px', borderRadius: '10px' }} />
  <img src={donutsImage} alt="Chocolate Cake" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
</div>


    </>
);

}

export default AboutUs