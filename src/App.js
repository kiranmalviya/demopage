import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import bg from "../src/assets/bg1.jpg";
import logo from "../src/assets/logo1.jpeg";
import insta from "../src/assets/insta.webp";
import google from "../src/assets/google-review.png";
import order from "../src/assets/order.png";
import phone from "../src/assets/phone.png";
import whatsapp from "../src/assets/whatsapp.png";
import zomato from "../src/assets/zomato.png";

function App() {
  return (
    <>
      <div className='container'>
        <div className='background'>
          <img src={bg} alt='background image' className='bg' />
        </div>
        <div className="content">
          <div className="profile">
            <img className="profile-logo" src={logo} alt="Avatar" />
          </div>
          <div className="details">
            <div className="username">
              <p>Bunkers Beans Cafe</p>
            </div>
            <div className="bio">
              <p>Happiness is a cup of coffee and a good book</p>
            </div>
          </div>
        </div>

        <div className="social-media-links">
          <div className="row">
            <div className="wrapper">
              <Link to="https://www.instagram.com/bbcujjain?igsh=MWZpbzk3cDVhaGpnOA%3D%3D&utm_source=qr"><img src={insta} alt='img' /></Link>
              <span className="alt-text">Follow Us </span></div>

            <div className="wrapper">
              <Link to="https://g.co/kgs/2D1YhxG"><img src={google} alt='img' /></Link>
              <span className="alt-text">Your Experience</span></div>

            <div className="wrapper">
              <Link to="https://dinein.petpooja.com/orders/category/kw40gidr/T1"><img src={order} alt='img' width={1000} /></Link>
              <span className="alt-text">Order Now</span></div>

            <div className="wrapper">
              <Link to="tel:+91 99771 12666"><img src={phone} alt='img' /></Link>
              <span className="alt-text">Call Us </span></div>

            <div className="wrapper">
              <Link to="https://wa.me/919977112666?text=Hello How can I help you ?"><img src={whatsapp} alt='img' /></Link>
              <span className="alt-text">Message Us</span></div>

            <div className="wrapper">
              <Link to="https://link.zomato.com/xqzv/rshare?id=48146212305639a2"><img src={zomato} alt='img' /></Link>
              <span className="alt-text">Order Online </span></div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;