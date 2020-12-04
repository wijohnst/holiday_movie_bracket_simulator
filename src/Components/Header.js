import React from 'react'
import styled from 'styled-components'

import useMedia from '../Utilities/useMedia'
import getDevice from '../Utilities/getDevice'

const ComponentWrapper = styled.section`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%; 
`
const HeaderText = styled.span`
    font-size: ${({fontSize}) => fontSize};
    color: green;
    text-align: center;  
`
const DeathText = styled.span`
    font-family: 'Metal Mania', cursive;
    color: red;
`

export default function Header() {

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper>
            <HeaderText
                fontSize={(isMobile ? '3rem' : '5rem')} 
            >
                Holiday Movie <DeathText>DeathMatch</DeathText>
            </HeaderText>
        </ComponentWrapper>
    )
}
