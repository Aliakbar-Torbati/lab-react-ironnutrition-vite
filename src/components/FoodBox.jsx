import "../App.css";

const FoodBox = ({ allFood, setAllFood }) => {
    const handleDelete = (foodId)=>{
        const filteredFood= allFood.filter((food)=>{
            return food.id !== foodId 
        })
        setAllFood(filteredFood)
    }
  return (
    <div>
      {allFood.map((food) => {
        return (
          <div key={food.id} className="foodbox">
               
            <p>{food.name}</p>

            <img src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories*food.servings} </b> kcal
            </p>
            <button onClick={()=>handleDelete(food.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default FoodBox;
