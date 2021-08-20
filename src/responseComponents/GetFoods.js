import { useState } from "react";

const GetFoods = ({setResponses, responses}) => {
  const [newIngredient, setNewIngredient] = useState('') 
  const handleSubmit = (event) => {
    event.preventDefault()
    setResponses((currentResponse) => {
      const copy = { ...currentResponse }
      let ingredientsCopy = [...copy.ingredients]
      ingredientsCopy.push(newIngredient)
      copy.ingredients = ingredientsCopy
      return copy
    
    });
    setNewIngredient("")
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
                <input id="ingredientInput" type="text" value={newIngredient} onChange={(event)=> {
                    setNewIngredient(event.target.value)
                }}></input>
                <button htmlFor="ingredientInput">+</button>
            </form>
            <ul>
              {responses.ingredients.map(ingredient => {
                return <li id={ingredient}>{ingredient}</li>
              })}
            </ul>
    </div>
  );
};

export default GetFoods;