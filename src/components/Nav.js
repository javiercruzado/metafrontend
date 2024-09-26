import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo"></img>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
