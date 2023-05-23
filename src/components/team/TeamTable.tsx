import React from 'react'
import { Team } from '../../types/types'
import { hasAccessVar } from '../../client/cache';
import { useNavigate } from 'react-router-dom';


type Props = {
    teams: Team[]
    seeTeam: Function
    deleteTeam: Function
}

export const TeamTable:React.FC<Props> = ({teams, seeTeam, deleteTeam}): JSX.Element =>  {
    const navigate = useNavigate();

    return (
        <div className='select-tournament'>
        
        <div>
            <table>
                <thead>
                    <tr>
    
                        <th>Name</th>
    
                    </tr>
                </thead>
                <tbody>
                {teams.map( (team:Team ) => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td><button onClick={() => seeTeam(team._id? team._id : "")}>See Team</button></td>
                  {
                   hasAccessVar() && 
                  <td><button onClick={() => deleteTeam(team._id!)}>Delete</button></td>
                  }
                </tr>
            ))}
                </tbody>
            </table>
            <div className='table-button' >
          <button onClick={()=>navigate(-1)}>Return</button>
        </div>
            </div>
            </div>
            
            )
    
}
