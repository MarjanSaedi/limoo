import React from "react";
import ash from "../photos/ash.jpg";
import morgh from "../photos/zereshkpolo.jpg";
import ghorme from "../photos/ghorme.jpg";

import "./MainPage.css";

function MainPage() {
  return (
    <main className="main-container">
      <section className="specials">
        <h1>This Week Specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className="specials-content">
        <div className="content">
          <div>
            <img src={morgh} />
            <div>
              <h2>Zereshk polo</h2>
              <h2 id="price">$20</h2>
            </div>
            <p>
              Zereshk Polo Ba Morgh (زرشک پلو با مرغ) is a classic Persian dish
              consisting of saffron-infused rice with barberries (zereshk) and
              tender, slow-cooked chicken in a rich tomato-saffron sauce. It is
              a popular dish for special occasions, family gatherings, and
              Persian celebrations like weddings and Nowruz (Persian New Year).
            </p>
            <button id="add-button">Add to cart</button>
          </div>

          <div>
            <img src={ghorme} />
            <div>
              <h2>Gorme sabzi</h2>
              <h2 id="price">$17</h2>
            </div>
            <p>
              Ghormeh Sabzi (قورمه سبزی) is one of the most beloved and iconic
              Persian stews, known for its rich, herby, and tangy flavor. It is
              slow-cooked to perfection and typically served with steamed
              basmati rice (Chelow).
            </p>
            <button id="add-button">Add to cart</button>
          </div>

          <div>
            <img src={ash} />
            <div>
              <h2>Ash Reshte</h2>
              <h2 id="price">$15</h2>
            </div>
            <p>
              Ash Reshteh (آش رشته) is a thick Persian noodle soup made with
              legumes, fresh herbs, and reshteh (Persian noodles), topped with
              kashk (fermented whey), fried onions, garlic, and mint oil. It has
              a rich, hearty, and slightly tangy flavor that makes it a favorite
              comfort food.
            </p>
            <button id="add-button">Add to cart</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
