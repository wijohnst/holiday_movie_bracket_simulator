import React from 'react'
import styled from 'styled-components'

import useMedia from '../Utilities/useMedia'
import getDevice from '../Utilities/getDevice'

import MovieSelect from './MovieSelect'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    padding: 1rem;
`
export default function Controls() {

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper
            flexDirection={(isMobile ? 'column' : 'row')}
        >
            <MovieSelect 
                position={0}
            />
            <MovieSelect 
                position={1}
            />
        </ComponentWrapper>
    )
}
