import { MenuItem } from "./FoodData";
import "./FoodCard.css";
const FoodCard = ({ foodItem }: { foodItem: MenuItem }): JSX.Element => {
  return (
    <div className="card">
      <img className="card-image" src={foodItem.image} alt={foodItem.name} />
      <h3 className="card-title">{foodItem.name}</h3>
      <div className="card-description">
        <p>{foodItem.description}</p>
      </div>
      <div className="card-price">
        <span className="price-label">Price:</span> ${foodItem.price.toFixed(2)}
      </div>
      <div className="card-buttons">
        <button className="add-to-cart-button">Add To Cart</button>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
};

export default FoodCard;
