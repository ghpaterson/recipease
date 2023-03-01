import { useEffect, useState } from "react";

function Popular() {

const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API}&number=8`);
    const data = await api.json();
    setPopular(data.recipes)
    console.log(data)
  }
  return (
    <div>
      {popular.map((recipe) => {
        return(
          <div>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Popular