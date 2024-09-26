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
      <section className="home-week-specials">
        <h2 id="h-week-specials">This week specials!</h2>
        <button id="b-online-menu">Online Menu</button>
        {/* {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )} */}
      </section>
    </>
  );
};

export default HomePage;
