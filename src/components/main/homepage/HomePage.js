import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="main-section home-page-section">
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
      </section>
      <section id="hero-image"></section>
    </>
  );
};

export default HomePage;
