import { useEffect, useState } from "react";
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {

    const checkLocalStorage = localStorage.getItem('veggie');

    if (checkLocalStorage){
      setVeggie(JSON.parse(checkLocalStorage))
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API}&number=10&tags=vegetarian`);
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    }

    
  }
  return (
      <div>
          <Wrapper>
            <h3>Vegetarian</h3>
            <Splide options={{
              perPage: 4,
              arrows: true, 
              pagination: false,
              drag: "free",
              gap: "3rem",
            }}>
            {veggie.map((recipe) => {
              return(
                <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
                </SplideSlide>
              );
            })}
            </Splide>
          </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 1rem 0rem;
  
  h3 {
    color: #1A1313;
    font-family: "Lato", sans-serif;
  }
`;

const Card = styled.div`
  min-height: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    border: 4px solid #e8af10;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #F7F5EB;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  opacity: ;
`;

export default Veggie