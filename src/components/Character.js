// Write your Character component here
import React from "react";  
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2%;
  border: 1px solid white;
  background-color: black;
  width: 30%;
  color: orange;
`


const Character = (props) => {
   console.log(props)
    return (
        <Div>
          <h2>Name: {props.chars.name}</h2> 
          <h3>Height: {props.chars.height}</h3> 
        </Div>
    )
}

export default Character