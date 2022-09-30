import React from "react";
import styled from "styled-components";


const ItemContainer = styled.div`
   width:225px;
   height:120px;
   background-color:#0b0b0b;
   margin-right:5px;
   overflow:hidden;
   cursor:pointer;
   color:white;



`

const MainImage = styled.img`
   width:100%;
   height:100%;
   object-fit:cover;



`

const MovieItem=({index})=>{
    return (
        <ItemContainer>

<MainImage src="https://cdn.cloudflare.steamstatic.com/steam/apps/1265780/capsule_616x353.jpg?t=1618237900" alt="trailer" />

        </ItemContainer>
    )
}
export default MovieItem