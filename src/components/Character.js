import React from 'react'
import styled from 'styled-components'

// Write your Character component here

const Character = (props) => {

// const StyledP = styled.p
const StyledDiv = styled.div`
display:flex;
justify-content: center;
div {
    border: black 2px solid;
    border-radius: 10%;
    width:20%;
    margin: 0 0 1% 0;
    background-color: lightgray;
    
    
}
div:hover {
    border: blue 2px solid;
}
div h2:hover {
    color: blue;
}
div p:hover {
    color:red;
}

`

    const filler = props.props






    return  (
    <div>
        {filler.map(info => {
        return (
            <StyledDiv>
                <div>
                    <h2><b>{info.name}</b></h2>
                    <p>{info.birth_year}</p>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    <p>Hair color: {info.hair_color}</p>
                    <p>Skin color: {info.skin_color}</p>
                    <p>Eye color: {info.eye_color}</p>
                    <p>Gender: {info.gender}</p>
                   </div>
            </StyledDiv>
        )
        })}
    </div>
    )
}

export default Character