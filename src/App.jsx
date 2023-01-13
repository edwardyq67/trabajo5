
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import UserName from './components/UserName'
import Pokemones from './components/Pokemones'
import CaracterPokemo from './components/CaracterPokemo'
import ProtectedRoutes from './components/Potected'
import './css/UserName.css'
import './css/Pokemon.css'
import'./css/GridPokemon.css'
function App() {


  return (
    
      <HashRouter>
        <Routes>
          
          <Route  path='/' element={<UserName/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokemones' element={<Pokemones/>}/>
          <Route path='/pokemones/:id' element={<CaracterPokemo/>}/>
          </Route>
          
        </Routes>
      </HashRouter>
    
  )
}

export default App
