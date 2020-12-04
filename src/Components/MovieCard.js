import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { formatQueryString, getMovieData } from '../Utilities/getMovies'

const ComponentWrapper = styled.section`
    color: white;
    padding: .25rem;
    
`
const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`
const Title = styled.span`
    font-size: 3rem;
`
const Image = styled.img`
    height: 300px;
`
const MetaScore = styled.span`
    margin-top: .5rem;
    font-size: 2rem;
    font-weight: 300;
    &:before{
        content: "Metascore:";
        margin-right: .25rem;
    }
`
const ImdbScore = styled.span`
    margin-top: .5rem;
    font-size: 2rem;
    font-weight: 300;
    &:before{
        content: "IMDB Score:";
        margin-right: .25rem;
    }
`
const ReleaseYear = styled.span``

export default function MovieCard(props) {

    const { target } = props;
    const [ movieData, setMovieData ] = useState(undefined);

    useEffect(() =>{
        const queryString = formatQueryString(target);
        getMovieData(queryString).then(data => setMovieData(data));
    },[target])

    return (
        <ComponentWrapper>
            {(movieData ?
            <Card> 
                <Title>{movieData.Title}</Title>
                <ReleaseYear>{movieData.Year}</ReleaseYear>
                <Image src={movieData.Poster} alt={`Poster for ${movieData.Title}`} />
                <MetaScore>{movieData.Metascore}</MetaScore>
                <ImdbScore>{movieData.imdbRating}</ImdbScore>
            </Card>
            : <p>Getting Movie Data...</p>)}
        </ComponentWrapper>
    )
}
