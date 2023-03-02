import {GiTacos, GiNoodles, GiFullPizza, GiFlatfish} from 'react-icons/gi';
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
        <StyledLink to={'cuisine/Asian'}>
            <GiNoodles />
            <h4>Asian</h4>
        </StyledLink>
        <StyledLink to={'cuisine/Italian'}>
            <GiFullPizza />
            <h4>Italian</h4>
        </StyledLink>
        <StyledLink to={'cuisine/British'}>
            <GiFlatfish />
            <h4>British</h4>
        </StyledLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;    
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category