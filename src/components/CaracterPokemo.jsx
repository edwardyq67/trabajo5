import axios from 'axios';
import React, { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router-dom';
import'../css/ultPagina.css'
const CaracterPokemo = () => {
    const {id}=useParams()
    const [PokemonId,setPokemonId]=useState({})
    const [colorB,setColorB]=useState({})
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>{setPokemonId(res.data),
            setColorB(res.data.types[0].type?.name)
        })
    },[id])
    
    var style={
        animation:  'html-barra 2s forwards',
        
    }
    var style1={
        animation:  'html-barra1 2s forwards',
    }
    var style2={
        animation:  'html-barra2 2s forwards',
    }
    return (
        <div className='pag3'>
            <div className="foto_name">
              
            <img src={PokemonId.sprites?.other.home.front_default} alt="" /> 
             <h3>{PokemonId.name}</h3>
            </div>
            <div className="connt_barras">
                <h2>Stats</h2>
                <div className="conn">
                    <div className="barras">
                        <h3>{PokemonId.stats?.[0].stat.name}</h3>
                        <h3>{PokemonId.stats?.[0].base_stat}</h3>
                    </div>
                    <div className="barra">
                    <div  style={style} className={`bara${colorB}`}>
              <style>{`@keyframes  html-barra{100%{width:${(PokemonId.stats?.[0].base_stat)/2}%;}}`} </style>
            </div>
                    </div>
                </div>
                <div className="conn">
                    <div className="barras" >
                        <h3>{PokemonId.stats?.[1].stat.name}</h3>
                        <h3>{PokemonId.stats?.[1].base_stat}</h3>
                    </div>
                    <div className="barra" >
                    <div  style={style1} className={`bara${colorB}`}>
                    <style>{`@keyframes  html-barra1{100%{width:${(PokemonId.stats?.[1].base_stat)/2}%;}}`} </style>
            </div>
                    </div>
                </div>
                <div className="conn">
                    <div className="barras">
                        <h3>{PokemonId.stats?.[2].stat.name}</h3>
                        <h3>{PokemonId.stats?.[2].base_stat}</h3>
                    </div>
                    <div className="barra">
                    <div  style={style2} className={`bara${colorB}`}>
                    <style>{`@keyframes  html-barra2{100%{width:${(PokemonId.stats?.[2].base_stat/2)}%;}}`} </style>
            </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default CaracterPokemo;