import { useState } from "react";
import "./App.css";
import foodJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [allFood, setAllFood] = useState(foodJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm
        allFood={allFood}
        setAllFood={setAllFood}
      />
      <FoodBox allFood={allFood} setAllFood={setAllFood} />
    </div>
  );
}

export default App;
