import React from 'react'
import styled from 'styled-components'

// Write your Character component here

const Character = (props) => {


    const filler = props.props






    return  (
    <div1>
        {filler.map(info => {
        return (
            <div2>
                <p>{info.name}</p>
                <p>{info.birth_year}</p>
               <div3> 
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    <p>Hair color: {info.hair_color}</p>
                    <p>Skin color: {info.skin_color}</p>
                    <p>Eye color: {info.eye_color}</p>
                    <p>Gender: {info.gender}</p>
               </div3>
            </div2>
        )
        })}
    </div1>
    )
}

export default Character