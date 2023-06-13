import FoodCard from "./FoodCard";
import { MenuItem } from "./FoodData";
import "./FoodCard.css";
interface FoodContainerProps {
  foodData: MenuItem[];
}
const FoodContainer = ({ foodData }: FoodContainerProps): JSX.Element => {
  return (
    <div className="card-container">
      {foodData?.map((foodItem: MenuItem) => (
        <FoodCard foodItem={foodItem} />
      ))}
    </div>
  );
};

export default FoodContainer;
