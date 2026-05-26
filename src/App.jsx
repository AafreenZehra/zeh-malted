import React, { useState } from "react";
import { Leaf, Heart, Star, MessageCircle } from "lucide-react";

export default function App() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "Signature Wellness Blend",
    tamil: "Saathu Mix",
    price: 350,
    size: "250g",
  };

  const total = qty * product.price;

  const orderNow = () => {
    const message = `Hi Zeh Malted, I want to order ${qty} packet(s) of ${product.name} - ${product.tamil}. Total: ₹${total}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="page">
      <header className="header">
        <div>
          <div className="zeh">Zeh</div>
          <div className="malted">MALTED</div>
        </div>
        <a href="#order" className="nav-btn">Order Now</a>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="small">Rooted in tradition</p>
          <h1>Made for the healthy girl era.</h1>
          <p className="desc">
            Traditional wellness blends crafted with real ingredients,
            homemade care, and everyday nourishment.
          </p>
          <a href="#product" className="main-btn">Explore Product</a>
        </div>

        <div className="product-card">
          <div className="pack">
            <div className="zeh">Zeh</div>
            <div className="malted">MALTED</div>
            <p>Signature Wellness Blend</p>
            <h3>Saathu Mix</h3>
            <span>18 nourishing ingredients</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div><Leaf /> Natural Ingredients</div>
        <div><Heart /> Made with Care</div>
        <div><Star /> Strength & Glow</div>
      </section>

      <section id="product" className="section">
        <h2>Our Signature Product</h2>

        <div className="product-box">
          <div className="image-box">
            <div className="mock-pack">
              <div className="zeh">Zeh</div>
              <div className="malted">MALTED</div>
              <p>Saathu Mix</p>
            </div>
          </div>

          <div>
            <p className="small">18 nourishing ingredients</p>
            <h3>Signature Wellness Blend</h3>
            <h4>Saathu Mix</h4>
            <p>
              A traditional wellness blend made with millets, pulses,
              nuts and seeds for daily nourishment, strength and glow.
            </p>
            <p className="price">₹350 / 250g</p>
          </div>
        </div>
      </section>

      <section className="section recipes">
        <h2>Recipes</h2>
        <p>
          Recipe ideas are coming soon. We’ll share warm malt drinks,
          breakfast bowls, and healthy everyday ways to enjoy Zeh Malted.
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
      </footer>
    </div>
  );
}
