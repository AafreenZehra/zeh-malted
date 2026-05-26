import React, { useState } from "react";
import { Leaf, Heart, Star, MessageCircle, Dumbbell, Sparkles, ShieldCheck, Battery } from "lucide-react";
import "./style.css";

export default function App() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "Signature Wellness Blend",
    tamil: "Sathu Mix",
    price: 350,
    size: "250g",
  };

  const ingredients = [
    "Ragi", "Kambu", "Thinai", "Samai", "Varagu", "Wheat",
    "Green Gram", "Bengal Gram", "Raw Rice", "Black Urad Dal", "Black Rice",
    "Horse Gram", "Peanuts", "Almonds", "Cashews", "Walnuts", "Pistachios", "Sunflower Seeds"
  ];

  const total = qty * product.price;

  const orderNow = () => {
    const message = `Hi Zeh Malted, I want to order ${qty} packet(s) of ${product.name} - ${product.tamil}. Total: ₹${total}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="zeh">Zeh</div>
          <div className="malted">MALTED</div>
        </div>
        <a href="#order" className="nav-btn">Order Now</a>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="small">Rooted in tradition</p>
          <h1>Daily nourishment for every health-conscious home.</h1>
          <p className="desc">
            A traditional wellness blend crafted with 18 real ingredients for strength,
            stamina, skin glow, post-workout nourishment, and anaemia support.
          </p>
          <div className="hero-actions">
            <a href="#product" className="main-btn">Explore Product</a>
            <a href="https://instagram.com/zeh.malted" target="_blank" rel="noreferrer" className="insta-btn">@zeh.malted</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="cup-card">
            <div className="steam">♡</div>
            <h2>Real ingredients.</h2>
            <p>Real nourishment.</p>
            <span>Signature Wellness Blend</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div><Leaf /> Natural Ingredients</div>
        <div><Heart /> Made with Care</div>
        <div><Star /> Strength & Glow</div>
        <div><Dumbbell /> Post-Workout Drink</div>
      </section>

      <section id="product" className="section">
        <h2>Our Signature Product</h2>

        <div className="product-box">
          <div className="image-box">
            <div className="mock-pack">
              <div className="zeh">Zeh</div>
              <div className="malted">MALTED</div>
              <p>Signature Wellness Blend</p>
              <h3>Sathu Mix</h3>
              <span>18 nourishing ingredients</span>
            </div>
          </div>

          <div className="product-info">
            <p className="small">18 nourishing ingredients</p>
            <h3>Signature Wellness Blend</h3>
            <h4>Sathu Mix</h4>
            <p>
              A traditional wellness mix made with millets, pulses, nuts and seeds.
              Designed for daily nourishment, healthy energy, and natural strength.
            </p>
            <p className="price">₹350 / 250g</p>

            <div className="benefit-grid">
              <div><Sparkles /> Skin glow</div>
              <div><ShieldCheck /> Anaemia support</div>
              <div><Dumbbell /> Post-workout drink</div>
              <div><Battery /> Stamina & strength</div>
              <div><Heart /> Overall health</div>
              <div><Leaf /> Clean nourishment</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section ingredients-section">
        <h2>What’s Inside?</h2>
        <p className="desc-small">
          A wholesome blend of grains, millets, pulses, nuts and seeds — each chosen for nourishment, strength and wellness.
        </p>
        <div className="ingredients-grid">
          {ingredients.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section benefits-section">
        <h2>Why Sathu Mix?</h2>
        <div className="cards">
          <div><h3>Millets</h3><p>Support fullness, steady energy and traditional daily nourishment.</p></div>
          <div><h3>Pulses</h3><p>Help provide plant protein for strength and recovery.</p></div>
          <div><h3>Nuts & Seeds</h3><p>Add healthy fats, minerals and glow-supporting nourishment.</p></div>
          <div><h3>Iron-rich Goodness</h3><p>Ingredients like ragi, black rice, horse gram and seeds support iron intake.</p></div>
        </div>
      </section>

      <section className="section recipes">
        <h2>Recipes</h2>
        <p>
          Recipe ideas are coming soon. We’ll share warm malt drinks,
          breakfast bowls, post-workout drinks and healthy everyday ways to enjoy Zeh Malted.
        </p>
      </section>

      <section id="order" className="section order">
        <h2>Place Your Order</h2>
        <p>Launch orders are taken through WhatsApp.</p>

        <div className="qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <h3>Total: ₹{total}</h3>

        <button className="whatsapp" onClick={orderNow}>
          <MessageCircle size={18} /> Order on WhatsApp
        </button>
      </section>

      <footer>
        <div className="zeh">Zeh</div>
        <div className="malted">MALTED</div>
        <p>Real ingredients. Real nourishment.</p>
        <a href="https://instagram.com/zeh.malted" target="_blank" rel="noreferrer">@zeh.malted</a>
      </footer>
    </div>
  );
}
