import "./MenuSpecials.css";

const MenuSpecial = (props) => {
  const { title, description, cost, image } = props;
  return (
    <div className="menu-specials">
      <img src={image} alt={title} />
      <div className="menu-specials-header">
        <h3>{title}</h3>
        <span>{cost}</span>
      </div>
      <div className="menu-specials-body ">
        <p>{description}</p>
        <a href="#">Order a delivery</a>
      </div>
    </div>
  );
};

export default MenuSpecial;
