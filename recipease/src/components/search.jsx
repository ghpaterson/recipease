import styled from "styled-components"
import {useState} from 'react'
import {ImSearch} from 'react-icons/im'
import {useNavigate} from 'react-router-dom';




function Search() {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };


  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <ImSearch></ImSearch>
        <input 
          onChange={(e) => setInput(e.target.value)}
          type="text" 
          value={input} 
        />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
    div {
      width: 100%;
      position: relative;
    }
  
  input {
    border: none;
    background: linear-gradient(35deg, #6096b4 , #6096b4);
    font-size: 1rem;
    color: #F7F5EB;
    padding: 1rem 3rem;
    border-radius: 2rem;
    outline: none;
    width: 90%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #F7F5EB;
  }
`

export default Search