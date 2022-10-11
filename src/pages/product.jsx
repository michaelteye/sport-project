import React from "react";
import Container from "../layout/Container";
import Header from "../components/Header";
import Footer from "../layout/Footer";
import productImageLarge from "../assets/images/product-large.jpg"
import shoppingCart from "../assets/icons/png/shopping-cart-white.png"
export default function Product() {
  return (
    <>
      <Header />
      <Container>
      <div className="product-container">
      <section class="main">
        <div class="mySlides">
                <img src={productImageLarge} alt="" />
        </div>
        <a class="prev" ></a>
        <a class="next"></a>
        <div class="row">
            <div class="column">
              <img class="demo cursor" src={productImageLarge}  alt="The Woods"/>
            </div>
            <div class="column">
              <img class="demo cursor" src={productImageLarge} alt="Cinque Terre"/>
            </div>
            <div class="column">
              <img class="demo cursor" src={productImageLarge}  alt="Mountains and fjords"/>
            </div>
            <div class="column">
              <img class="demo cursor" src={productImageLarge}  alt="Northern Lights"/>
            </div>
            <div class="column">
              <img class="demo cursor" src={productImageLarge}  alt="Nature and sunrise"/>
            </div>
            <div class="column">
              <img class="demo cursor" src={productImageLarge}  alt="Snowy Mountains"/>
            </div>
          </div>
    </section>
      <section class="text">
        <div class="affect">
            <h4>Manchester United 21-22 Home Shirt</h4>
            <div class="fle">
                <p class="price bak">$30.00</p>
                <p class="discount bake">$89.95</p>
                <p class="save bake">Save 67%</p>
                <p class="fav bake"><span><img src="" alt=""/></span> Add to Favorites</p>
            </div>
            <div class="des">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore perferendis asperiores, ipsum ullam voluptate architecto dolore? Molestias 
                inventore labore id necessitatibus ab aspernatur aut obcaecati nam nostrum? Fuga, facilis?</p>
            </div>
            <div class="fill">
                <p>Size :</p>
                <input type="text" class="change select" placeholder="Select a shirt size" />
            </div>
            <div class="fill">
                <p>Name :</p>
                <input type="text" class="change name" placeholder="What name would in the shirt"/>
            </div>
            <div class="fill">
                <p>Number on Shirt :</p>
                <input type="text" class="change number" placeholder="Enter a number between 0 and 99"/>
            </div>
            <div class="fill">
                <p>Patch :</p>
                <input type="text" class="change a" placeholder="Select a shirt size"/>
            </div>
            <div class="fill">
                <p>Quantity :</p>
                <input type="number" class="change value" placeholder="1"/>
            </div>  
        </div>
            <div class="btn">
                <button>
                  <span>Add to cart</span>
                  <div className="btn-image">
                <img src={shoppingCart} alt=""/>
                  </div>
                </button>

            </div>
    </section>
      </div>
         
      </Container>
      <Footer />
    </>
  );
}
