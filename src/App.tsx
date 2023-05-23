import Header from './components/header'
import { BrowserRouter, Routes, Route, Navigate,RedirectFunction } from 'react-router-dom'
import './styles/App.css'
import DisplayTeams from './components/team/DisplayTeams'
import DisplayTournament from './components/tournament/DisplayTournaments'
import FrontPage from './components/FrontPage'
import Adminpage from './components/admin/Adminpage'
import { ADMIN_ACCESS } from '../graphql/query'
import { useQuery } from "@apollo/client";


function App() {

  const {data} = useQuery(ADMIN_ACCESS);

  return (
    <div className="App">
      
      <BrowserRouter basename=''>
      <Header />
      <Routes>
      <Route path='/' element={<FrontPage/>} />
      <Route path="/team" element={<DisplayTeams />} />
      <Route path="/admin"  element={data.hasAccess === true ? <Adminpage/> : <Navigate to="/" replace={true} />}/>
      <Route path="/tournament" element={<DisplayTournament />} />
<<<<<<< HEAD
      <Route path="/admin"  element={ hasAccessVar() ? <Adminpage /> : <Navigate to='/' replace />}/>
      {/* <Route path="*" element={<Navigate to='/' replace />} /> */}
=======
      <Route path="*" element={<Navigate to="/" replace={true} />}
    />
>>>>>>> 29a6ce0c29b3b40642afef63dbab770c18b3c877
      </Routes>
      </BrowserRouter>

    </div>

  )

  
}

export default App
