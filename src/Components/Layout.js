import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../Store/ViewContext'

import Controls from './Controls'
import Deathmatch from './Deathmatch'
import Header from './Header'

const AppWrapper = styled.section`
    /* height: 100%; */
`

export default function Layout(props) {

    const { children } = props;
    const { viewData } = useContext(ViewContext);

    return (
        <>
            <Header />
            <Deathmatch />
            <Controls />
        </>
    )
}
