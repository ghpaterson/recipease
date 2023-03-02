import {GiTacos, GiNoodles, GiFullPizza, GiCakeSlice} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react'

function Category() {
  return (
    <List>
        <NavLink to={'cuisine/Mexican'}>
            <GiTacos />
            <h4>Mexican</h4>
        </NavLink>
        <NavLink to={'cuisine/Asian'}>
            <GiNoodles />
            <h4>Asian</h4>
        </NavLink>
        <NavLink to={'cuisine/Italian'}>
            <GiFullPizza />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'cuisine/Dessert'}>
            <GiCakeSlice />
            <h4>Dessert</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;    
`;

export default Category