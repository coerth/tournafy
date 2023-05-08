import { useState } from 'react'
import Header from './components/header'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import './styles/App.css'
import DisplayTeams from './components/team/DisplayTeams'
import DisplayTournament from './components/tournament/DisplayTournaments'
import FrontPage from './components/FrontPage'
import DisplayPlayers from './components/player/DisplayPlayers'
import DisplayMatches from './components/match/DisplayMatches'
import AddPlayer from './components/player/AddPlayer'
import AddTeam from './components/team/AddTeam'
import AddTournament from './components/tournament/AddTournament'
import Adminpage from './components/admin/Adminpage'
import DeletePlayer from './components/player/DeletePlayer'
import Modal from './components/modal/modal'
import useModal from './hooks/useModal'



function App() {
  const { isOpen, toggle } = useModal();

  return (
    <div className="App">
      
      <BrowserRouter basename=''>
      <Header />
      <Routes>
      <Route path='/' element={<FrontPage/>} />
      <Route path="/team" element={<DisplayTeams />} />
      <Route path="/tournament" element={<DisplayTournament />} />
      <Route path="/match" element={<DisplayMatches />} />
      <Route path="/admin" element={<Adminpage/>}/>
      </Routes>
      <button onClick={toggle}>Go to Modal</button>
          <Modal isOpen={isOpen} toggle={toggle} children={<DeletePlayer/>} />
      </BrowserRouter>

    </div>

  )

  
}

export default App
