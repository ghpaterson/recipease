import {GiTacos, GiNoodles, GiFullPizza, GiFlatfish, GiChickenLeg, GiSushis} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react'

function Category() {
  return (
    <List>
        <StyledLink to={'cuisine/Mexican'}>
            <GiTacos />
            <h4>Mexican</h4>
        </StyledLink>
        <StyledLink to={'cuisine/Japanese'}>
            <GiSushis />
            <h4>Japanese</h4>
        </StyledLink>
        <StyledLink to={'cuisine/Italian'}>
            <GiFullPizza />
            <h4>Italian</h4>
        </StyledLink>
        <StyledLink to={'cuisine/British'}>
            <GiFlatfish />
            <h4>British</h4>
        </StyledLink>
        <StyledLink to={'cuisine/French'}>
            <GiChickenLeg />
            <h4>French</h4>
        </StyledLink>
        <StyledLink to={'cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </StyledLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;    
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #fa440c, #fa440c);
  width: 7rem;
  height: 4.5rem;
  cursor: pointer;
  transform: scale(0.7);
  border: 2px solid #e8af10;

  h4 {
    color: #F7F5EB;
    font-size: 0.9rem;
    font-family: 
  }

  svg {
    color: #F7F5EB;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #e8af10, #e8af10);

    svg {
      color: rgb(228, 217, 202);
    }

    h4 {
      color: #F7F5EB;
    }
  }
`;

export default Category