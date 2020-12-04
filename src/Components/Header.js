import React from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.section`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`
const HeaderText = styled.span`
    font-size: 5rem;
    color: green;  
`
const DeathText = styled.span`
    font-family: 'Metal Mania', cursive;
    color: red;
`

export default function Header() {
    return (
        <ComponentWrapper>
            <HeaderText>Holiday Movie <DeathText>DeathMatch</DeathText></HeaderText>
        </ComponentWrapper>
    )
}
