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
    background: linear-gradient(35deg, #36032a, #21011a);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search