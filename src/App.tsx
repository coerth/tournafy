import Header from './components/header'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/App.css'
import DisplayTeams from './components/team/DisplayTeams'
import DisplayTournament from './components/tournament/DisplayTournaments'
import FrontPage from './components/FrontPage'
import Adminpage from './components/admin/Adminpage'
import {hasAccessVar } from "./client/cache";

function App() {


  return (
    <div className="App">
      
      <BrowserRouter basename=''>
      <Header />
      <Routes>
      <Route path='/' element={<FrontPage/>} />
      <Route path="/team" element={<DisplayTeams />} />
      <Route path="/tournament" element={<DisplayTournament />} />
      <Route path="/admin"  element={ hasAccessVar() ? <Adminpage /> : <Navigate to='/' replace />}/>
      {/* <Route path="*" element={<Navigate to='/' replace />} /> */}
      </Routes>
      </BrowserRouter>

    </div>

  )

  
}

export default App
