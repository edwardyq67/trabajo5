import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import'../css/GridPokemon.css'

const UrlPokemon = ({UrlPokemon}) => {
    const navigate=useNavigate()
    const [pokemon,setPokemon]=useState({})
    const[color,setColor]=useState({})
    useEffect(()=>{
        axios.get(UrlPokemon)
        .then(res=>{setPokemon(res.data)
            setColor(res.data.types[0].type?.name)
        })
    },[])
    console.log(color)
    return (
        <div className='cajaPokemon' onClick={()=>{navigate(`/pokemones/${pokemon.id}`)}}>
           <div className={color}>
            <h2>{pokemon.name}</h2>
            
            <img className='imgCol' src={pokemon.sprites?.other.home.front_default} alt="" />
           </div>
            
        </div>
    );
};

export default UrlPokemon;