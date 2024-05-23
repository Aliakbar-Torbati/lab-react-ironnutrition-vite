import { useState } from "react";
import "./App.css";
import foodJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [allFood, setAllFood] = useState(foodJson);
  const [searchTerm, setSearchTerm]= useState("");
  console.log("searchTerm", searchTerm)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm allFood={allFood} setAllFood={setAllFood} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FoodBox allFood={allFood} setAllFood={setAllFood} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
