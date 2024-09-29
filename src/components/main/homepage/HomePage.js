import GreekSalad from "../../../assets/greek salad.jpg";
import MenuSpecial from "../menuespecials/MenuSpecials";
import Bruchetta from "../../../assets/bruchetta.png";
import LemonDessert from "../../../assets/lemon dessert.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="main-section">
        <article className="home-page-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned <br />
            Mediterranean restaurant, <br />
            focused on traditional
            <br />
            recipes server with a modern <br />
            twist
          </p>
          <button>Reserve a table</button>
        </article>
        <article id="hero-image"></article>
      </section>
      <section className="header-week-specials">
        <h2 id="h-week-specials">This week specials!</h2>
        <button id="b-online-menu">Online Menu</button>
        <div className="week-specials">
          <MenuSpecial
            title={"Greek Salad"}
            description={`The famous greek salad of crispy lettuce, peppers, olives and 
                    our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
                          croutons.`}
            cost={"$12.99"}
            image={GreekSalad}
          />
          <MenuSpecial
            title={"Bruschetta"}
            description={`Our Bruschetta is made from grilled bread that has been 
                  smeared with garlic and seasoned with salt and olive oil.`}
            cost={"$5.99"}
            image={Bruchetta}
          />
          <MenuSpecial
            title={"Lemon Dessert"}
            description={`This comes straight from grandma's recipe book, every last 
                  ingredient has been sourced and is as authentic as can be imagined.`}
            cost={"$5.00"}
            image={LemonDessert}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
