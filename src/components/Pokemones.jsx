import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UrlPokemon from './UrlPokemon';
import Pagination from 'react-bootstrap/Pagination';
import'../css/GridPokemon.css'

const Pokemones = () => {
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
   const [namePokemon,setNamePokemon]=useState("")
    const[typePokemon,setTypePokemon]=useState([])

   useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res=>setPokemones(res.data.results))
   },[])
   useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/type")
    .then((res)=>{
        setTypePokemon(res.data.results)
    })
   },[])
   const search=(e)=>{
    e.preventDefault();
    navigate(`/pokemones/${namePokemon}`)
   }
   const filter =(e)=>{
    axios.get(e.target.value)
    .then(res=>setPokemones(res.data.pokemon.map(poken=>(poken.pokemon.url))))
   }
   const [Pokemones,setPokemones]=useState([])
   const [page,setPage]=useState(1);

   const charactersPerPage = 15;
  const lastCharacterIndex = page * charactersPerPage; //15;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;

   const charactersPaginated = Pokemones.slice(
    firstCharacterIndex,
    lastCharacterIndex
  ); 
  const totalPages = Math.ceil(Pokemones.length / charactersPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }
    return (
        <div className='Pokemon'>
            <h1>Bienvenido...  <b>{user}</b> </h1>
            <div className="cajaBusqueda">
                 <form onSubmit={search}>
                <input className='input' type="text"
                value={namePokemon}
                onChange={e=>setNamePokemon(e.target.value)}
                placeholder="nombre del pokemon"
                />
                
            </form>
            <select className='select' onChange={filter}>
                <option className='option'>tipos de pokemones</option>
                {
                    typePokemon.map(tpyePok=>(
                        <option value={tpyePok.url} key={tpyePok.url}>{tpyePok.name}</option>
                    ))
                }
            </select>
            </div>
           
            <ul className='grid-container'>
                {
                    charactersPaginated.map(Pokemon=>(
                        <UrlPokemon  key={Pokemon.url?Pokemon.url:Pokemon} UrlPokemon={Pokemon.url?Pokemon.url:Pokemon}/>
                    ))
                }
            </ul>
            <div className="cajaPag">
                <Pagination className='pagination'>
      
      
      
      {pagesNumbers.map((number) => (

      <Pagination.Item onClick={() => setPage(number)}>{number}</Pagination.Item>
      
 ))}
      
      
     
    </Pagination>
            </div>
            
            
        </div>
    );
};

export default Pokemones;