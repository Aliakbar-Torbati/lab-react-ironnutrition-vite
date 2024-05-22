import { useState } from "react"


const AddFoodForm = ({ allFood, setAllFood, handleCreateFood, Name, Image, Calories, Servings, setName }) => {
    // const [Name, setName]= useState ("")
    // const [Image, setImage]= useState ("")
    // const [Calories, setCalories]= useState (0)
    // const [Servings , setServings ]= useState (0)

    // const handleCreateFood= (event)=>{
    //     event.preventDefault();
    //     const newFood={id: Date.now(), Name, Image, Calories, Servings};
    //     console.log("new food",newFood)
    //     setAllFood([newFood, ...allFood]);
    // }

  return (
    <div>
        {/* <form onSubmit={handleCreateFood}>
            <span>Add Food Entry</span>
            <div>
            <label>
                Name
                <input name="Name" type="text" placeholder="Name" value={Name} onChange={(event) => {
                setName(event.target.value)
                }}
                />
            </label>
    
         <label>
                Image
                <input name="image" type="url" placeholder="Food Image" value={Image} onChange={(event) => {
                setImage(event.target.value)
                }} />
            </label>
    
            <label>
            Calories
                <input name="Calories" type="number" placeholder="Calories" value={Calories} onChange={(event) => {
                setCalories(event.target.value)
                }} />
            </label>
    
            <label>
            Servings
                <input name="Servings" type="number" placeholder="Servings" value={Servings} onChange={(event) => {
                setServings(event.target.value)
                }}/>
            </label> 
            </div>
    
            <button type="submit">Add Food</button>
        </form> */}
    </div>
  )
}

export default AddFoodForm
