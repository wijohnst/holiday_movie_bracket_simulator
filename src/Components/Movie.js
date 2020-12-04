import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../Store/ViewContext'
import MovieCard from './MovieCard';

const ComponentWrapper = styled.section`
    width: 100%;
    height: 100%;
    border: solid thin white;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Movie(props) {

    const { position } = props;
    const { viewData:{selection} } = useContext(ViewContext);
    const [ movie, setMovie ] = useState(undefined);

    useEffect(() =>{
        if(selection[position]){
            setMovie(selection[position]);
        }
    },[selection])

    return (
        <ComponentWrapper>
           {(movie ? <MovieCard target={movie} /> : <p>Select a movie to begin.</p>)}
        </ComponentWrapper>
    )
}
