import React, { useRef, useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../Store/ViewContext'

import getMovies from '../Utilities/getMovies'

const ComponentWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
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

    return (
        <ComponentWrapper>
            <select ref={selectRef} onChange={() => handleSelection(position)}>
                <option>{(position === 0 ? "Pick your first movie." : "Pick your second movie.")}</option>
                {getMovies().map((movie,index) => <option key={`option-${index}`}>{movie}</option>)}
            </select>
        </ComponentWrapper>
    )
}
