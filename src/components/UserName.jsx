import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import img from '../img/hola.jpg'
const UserName = () => {
    
    const [userName,setUserName]=useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const submit=e=>{
        e.preventDefault()
        navigate('/pokemones')
        dispatch(changeUser(userName))
    }
    
    return (
        <div className="userName">
            
           <div className="fondo"></div>
            
             <form onSubmit={submit} className="userC">
               <input className='input-search' type="text"
            value={userName}
            onChange={e=>setUserName(e.target.value)}
            placeholder="name"
            />
            <button className='btn-search'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
           
          
             
        </div>
        
        
    );
};

export default UserName;