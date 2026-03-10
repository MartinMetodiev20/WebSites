import React from "react";
import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <main>
              <Hero />
              <About />
              <Menu />
              <Gallery />
              <Reviews />
              <Contact />
            </main>
            <Footer />
            <Cart />
            <Toaster position="top-center" richColors />
          </div>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
