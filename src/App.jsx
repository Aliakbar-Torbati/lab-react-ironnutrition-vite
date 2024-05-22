import { useState } from "react";
import "./App.css";
import foodJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [allFood, setAllFood] = useState(foodJson);

  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Calories, setCalories] = useState(0);
  const [Servings, setServings] = useState(0);

  const handleCreateFood = (event) => {
    event.preventDefault();
    const newFood = { id: Date.now(), Name, Image, Calories, Servings };
    console.log("new food", newFood);
    setAllFood([newFood, ...allFood]);
    console.log("all food", allFood);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>


      <form onSubmit={handleCreateFood}>
            <span>Add Food Entry</span>
            <div>
            <label>
                Name
                <input name="Name" type="text" placeholder="Name" value={Name} onChange={(event) => {
                setName(event.target.value)
                }}
                />
            </label>
            </div>
    
    <button type="submit">Add Food</button>
</form>



      <AddFoodForm
        allFood={allFood}
        setAllFood={setAllFood}
        handleCreateFood={handleCreateFood}
        Name={Name}
        Image={Image}
        Calories={Calories}
        Servings={Servings}
        setName={setName}
      />
      <FoodBox allFood={allFood} setAllFood={setAllFood} />
    </div>
  );
}

export default App;
