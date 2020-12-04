import React from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Header() {
    return (
        <ComponentWrapper>
            Holiday Movie DeathMatch
        </ComponentWrapper>
    )
}
