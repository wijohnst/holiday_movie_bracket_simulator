import React from 'react'
import styled from 'styled-components'

import useMedia from '../Utilities/useMedia'
import getDevice from '../Utilities/getDevice'

import Movie from './Movie'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    padding: 1rem;
    justify-content: center;
    align-items: center;
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

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper
            flexDirection={(isMobile ? "column" : "row")}
        >
            <Movie position={0} />
            <Versus>VS.</Versus>
            <Movie position={1} />
        </ComponentWrapper>
    )
}
