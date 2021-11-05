import React from 'react'
import styled from 'styled-components'

// Write your Character component here

const Characters = (props) => {


    const { info } = props






    return  (
        
        <div>
            <h2>{info.name}</h2>  
            <h2>{info.birth_date}</h2> 
        </div>
    )
}

export default Characters