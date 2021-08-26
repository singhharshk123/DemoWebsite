import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="productsRow">
      <section className="images">
        
        
        <div className="photo">
          <img src="wedding01.webp" alt="" />
          <p className="productsText">wedding Photography</p>
        </div>

        
          <div className="photo">
            <img src="Beach02.webp" alt="" />
            <p className="productsText">Beach Photography</p>
          </div>
        

        
          <div className="photo">
            <img src="prewedding03.webp" alt="" />
            <p className="productsText">Pre wedding shoot</p>
          </div>
        

        
          <div className="photo">
            <img src="portfolio04.webp" alt="" />
            <p className="productsText">Shop Bundles</p>
          </div>

          <div className="photo">
            <img src="Drone05.webp" alt="" />
            <p className="productsText">Drone Services</p>
          </div>

          <div className="photo">
            <img src="Graphic06.webp" alt="" />
            <p className="productsText">Graphics design</p>
          </div>
        
      </section>
    </div>
  );
};

export default Products;
