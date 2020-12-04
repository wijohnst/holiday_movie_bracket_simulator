import React, { useRef, useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../Store/ViewContext'

import useMedia from '../Utilities/useMedia'
import getDevice from '../Utilities/getDevice'

import getMovies from '../Utilities/getMovies'

const ComponentWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({margin}) => margin};
    margin-bottom: 1rem;
`
export default function MovieSelect(props) {

    const { viewData ,setViewData } = useContext(ViewContext);

    const { position } = props;

    const selectRef = useRef(null);

    function handleSelection(target){
        const spread = [...viewData.selection];
        spread[target] = selectRef.current.value;
        setViewData({selection : spread});
    }

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper
            margin={(isMobile ? "none" : "1rem")}
        >
            <select ref={selectRef} onChange={() => handleSelection(position)}>
                <option>{(position === 0 ? "Pick your first movie." : "Pick your second movie.")}</option>
                {getMovies().map((movie,index) => <option key={`option-${index}`}>{movie}</option>)}
            </select>
        </ComponentWrapper>
    )
}
