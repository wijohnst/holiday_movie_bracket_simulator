import React from 'react'
import styled from 'styled-components'

import MovieSelect from './MovieSelect'

const ComponentWrapper = styled.section`
    display: flex;
    padding: 1rem;
`
export default function Controls() {
    return (
        <ComponentWrapper>
            <MovieSelect 
                position={0}
            />
            <MovieSelect 
                position={1}
            />
        </ComponentWrapper>
    )
}
