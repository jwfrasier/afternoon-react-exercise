import "./App.css";
import FoodContainer from "./components/FoodContainer";
import { foodData } from "./components/FoodData";

function App(): JSX.Element {
  return (
    <>
      <FoodContainer foodData={foodData} />
    </>
  );
}

export default App;
