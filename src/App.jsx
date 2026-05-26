import React, { useState } from "react";
import { Leaf, Heart, Star, MessageCircle, Dumbbell, Sparkles, ShieldCheck, Battery, Menu, X, Instagram, ShoppingBag } from "lucide-react";
import "./style.css";

export default function App() {
  const [qty, setQty] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <div className="zeh">Zeh</div>
          <div className="malted">MALTED</div>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a onClick={closeMenu} href="#product">Product</a>
          <a onClick={closeMenu} href="#benefits">Benefits</a>
          <a onClick={closeMenu} href="#ingredients">Ingredients</a>
          <a onClick={closeMenu} href="#recipes">Recipes</a>
          <a onClick={closeMenu} href="#order" className="nav-order">Order</a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small">Rooted in tradition</p>
          <h1>Daily nourishment for every health-conscious home.</h1>
          <p className="desc">
            A traditional wellness blend crafted with 18 real ingredients for strength,
            stamina, skin glow, post-workout nourishment, and anaemia support.
          </p>
          <div className="hero-actions">
            <a href="#product" className="main-btn">Explore Product</a>
            <button onClick={orderNow} className="whatsapp mini"><ShoppingBag size={17} /> Buy Now</button>
          </div>
        </div>

        <div className="hero-visual photo-visual">
          <div className="photo-card">
            <div className="packaging-mockup">
              <div className="mock-pack hero-pack">
                <div className="zeh">Zeh</div>
                <div className="malted">MALTED</div>
                <p>Signature Wellness Blend</p>
                <h3>Sathu Mix</h3>
                <span>18 nourishing ingredients</span>
              </div>
              <div className="glass">Malt</div>
              <div className="bowl">18 Ingredients</div>
            </div>
            <p className="visual-note">White zip-lock pouch + premium Zeh Malted sticker</p>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <a href="#product"><Leaf /> Product</a>
        <a href="#benefits"><Sparkles /> Benefits</a>
        <a href="#ingredients"><Star /> Ingredients</a>
        <a href="#order"><MessageCircle /> Order</a>
      </section>

      <section id="product" className="section product-section">
        <div className="section-title-row">
          <div>
            <p className="small">Our first product</p>
            <h2>Signature Wellness Blend</h2>
          </div>
          <p className="pill">Sathu Mix • ₹350</p>
        </div>

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
            <h3>Sathu Mix</h3>
            <p>
              A traditional wellness mix made with millets, pulses, nuts and seeds.
              Designed for daily nourishment, healthy energy, natural strength and glow.
            </p>
            <p className="price">₹350 / 250g</p>
            <button className="whatsapp" onClick={orderNow}><MessageCircle size={18} /> Order on WhatsApp</button>
          </div>
        </div>
      </section>

      <section id="benefits" className="section benefits-section">
        <p className="small">Why people will love it</p>
        <h2>Benefits</h2>
        <div className="benefit-grid">
          <div><Sparkles /> Skin glow</div>
          <div><ShieldCheck /> Anaemia support</div>
          <div><Dumbbell /> Post-workout drink</div>
          <div><Battery /> Stamina & strength</div>
          <div><Heart /> Overall health</div>
          <div><Leaf /> Clean nourishment</div>
        </div>
      </section>

      <section id="ingredients" className="section ingredients-section">
        <p className="small">What’s inside?</p>
        <h2>18 Ingredients</h2>
        <p className="desc-small">
          A wholesome blend of grains, millets, pulses, nuts and seeds — each chosen for nourishment, strength and wellness.
        </p>
        <div className="ingredients-grid">
          {ingredients.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section cards-section">
        <h2>Ingredient Benefits</h2>
        <div className="cards">
          <div><h3>Millets</h3><p>Support fullness, steady energy and traditional daily nourishment.</p></div>
          <div><h3>Pulses</h3><p>Provide plant protein for strength, recovery and daily wellness.</p></div>
          <div><h3>Nuts & Seeds</h3><p>Add healthy fats, minerals and glow-supporting nourishment.</p></div>
          <div><h3>Iron-rich Goodness</h3><p>Ragi, black rice, horse gram and seeds support iron intake.</p></div>
        </div>
      </section>

      <section id="recipes" className="section recipes">
        <h2>Recipes</h2>
        <p>
          Recipes are coming soon. We’ll share warm malt drinks, breakfast bowls,
          post-workout drinks and healthy everyday ways to enjoy Zeh Malted.
        </p>
      </section>

      <section id="order" className="section order">
        <p className="small">Launch orders</p>
        <h2>Place Your Order</h2>
        <p>Choose quantity and confirm through WhatsApp.</p>

        <div className="qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <h3>Total: ₹{total}</h3>
        <button className="whatsapp" onClick={orderNow}><MessageCircle size={18} /> Order on WhatsApp</button>
      </section>

      <footer>
        <div className="zeh">Zeh</div>
        <div className="malted">MALTED</div>
        <p>Real ingredients. Real nourishment.</p>
        <a href="https://instagram.com/zeh.malted" target="_blank" rel="noreferrer"><Instagram size={16} /> @zeh.malted</a>
      </footer>

      <div className="mobile-bottom-nav">
        <a href="#product">Product</a>
        <a href="#benefits">Benefits</a>
        <a href="#order">Order</a>
      </div>
    </div>
  );
}
