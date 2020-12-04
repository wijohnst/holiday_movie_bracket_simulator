import React from 'react'
import styled from 'styled-components'

import Movie from './Movie'

const ComponentWrapper = styled.section`
    display: flex;
    padding: 1rem;
`

export default function Deathmatch() {
    return (
        <ComponentWrapper>
            <Movie />
            <Movie />
        </ComponentWrapper>
    )
}
