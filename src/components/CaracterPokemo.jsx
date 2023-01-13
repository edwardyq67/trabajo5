import axios from 'axios';
import React, { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router-dom';

const CaracterPokemo = () => {
    const {id}=useParams()
    const [PokemonId,setPokemonId]=useState({})
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>setPokemonId(res.data))
    },[id])
    return (
        <div>
            <h2>CaracterPokemo </h2>
            <h3>{PokemonId.name}</h3>
            <img src={PokemonId.sprites?.other.home.front_default} alt="" />
        </div>
    );
};

export default CaracterPokemo;