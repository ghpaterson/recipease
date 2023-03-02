import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

import React from 'react';

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});

    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API}`)
      const detailsData = await data.json();
      setDetails(detailsData);
    };

  
  useEffect(() => {
    fetchDetails();
  }, [params.name]);


  return (
    <div>{details.title}</div>
  )
}

export default Recipe;