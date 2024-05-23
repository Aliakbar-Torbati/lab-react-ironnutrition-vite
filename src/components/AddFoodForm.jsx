import { useState } from "react";

const AddFoodForm = ({ allFood, setAllFood }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleCreateFood = (event) => {
    event.preventDefault();
    const newFood = { id: Date.now(), name, image, calories, servings };
    console.log("new food", newFood);
    setAllFood([newFood, ...allFood]);
    console.log("all food", allFood);
  };

  return (
    <div>
      <form onSubmit={handleCreateFood}>
        <span>Add Food Entry</span>
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>

          <label>
            Image
            <input
              name="image"
              type="url"
              placeholder="Food Image"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>

          <label>
            Calories
            <input
              name="calories"
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(event) => {
                setCalories(event.target.value);
              }}
            />
          </label>

          <label>
            Servings
            <input
              name="servings"
              type="number"
              placeholder="Servings"
              value={servings}
              onChange={(event) => {
                setServings(event.target.value);
              }}
            />
          </label>
        </div>

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
