import React from 'react'
import styled from 'styled-components'

import Movie from './Movie'

const ComponentWrapper = styled.section`
    display: flex;
    padding: 1rem;
`
const Versus = styled.div`
    font-family: 'Metal Mania', cursive;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;
`

export default function Deathmatch() {
    return (
        <ComponentWrapper>
            <Movie position={0} />
            <Versus>VS.</Versus>
            <Movie position={1} />
        </ComponentWrapper>
    )
}
