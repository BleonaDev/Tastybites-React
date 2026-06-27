import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import steakImg from './assets/steak.jpg';
import pastaImg from './assets/pasta.jpg';
import pizzaImg from './assets/pizza.jpg';
import sushiImg from './assets/sushi.jpg';
import rizottoImg from './assets/rizotto.jpg';
import burritoImg from './assets/Burrito.jpg';
import cheesecakeImg from './assets/cheesecake.jpg';
import stars from './assets/stars.png';
import timeImage from './assets/time.png';

function Swiper() {
  const popularRecipes = [
    { image: steakImg, title: "Pan fried steak" },
    { image: pastaImg, title: "Cheesy Pasta" },
    { image: pizzaImg, title: "Homemade pizza" },
    { image: sushiImg, title: "California Sushi" },
    { image: rizottoImg, title: "Rizotto" },
    { image: burritoImg, title: "Chicken avocado burrito" },
    { image: cheesecakeImg, title: "Strawberry Cheesecake" }
  ];

  return (
    <section className="swiper-container-section" style={{ padding: '20px 0' }}>
      {}
      <h1 id="mostPopular">Most Popular🍴</h1><br/>
      <SwiperComponent
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3} 
        navigation={true} 
        pagination={{ clickable: true }} 
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {popularRecipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <div className="popular">
              <img src={recipe.image} id="popularImg" alt={recipe.title} />
              <h3>{recipe.title}</h3>
              
              <div className="specifics">
                <img src={timeImage} width="30" height="30" alt="time" />
                <span>5 minutes</span>
                <button className="fav-btn" style={{ color: 'grey', background: 'none', border: 'none' }}>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              
              <img src={stars} width="110" height="24" style={{ marginLeft: "54px" }} alt="stars" />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </section>
  );
}

export default Swiper;