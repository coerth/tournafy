import { Player, Team, Match, Tournament, SignUp, LogIn,  } from "./types"
import { dateFormatForm } from "../utility/date"

export const  playerInitialState: Player = {
    name: ""
}

export const teamInitialState: Team = {
    name: "t",
    captain: playerInitialState,
    players: [playerInitialState]
}

export const teamInputInitialState = {
    name: "",
    captain: "",
    players: new Array<String>
}

export const matchInitialState: Match = {
    location: "",
    winner: teamInitialState,
    score: [0,0],
    stage: 0,
    teams: [teamInitialState]
}

export const tournamentInitialState: Tournament = {
    name: "",
    startDate: dateFormatForm(new Date()),
    endDate: "2050-12-31",
    maxTeams: 2,
    minTeams: 2,
    matches: [matchInitialState],
    teams: [teamInitialState],
}

export const tournamentInputInitialState: Tournament = {
    name: "",
    maxTeams: 8,
    minTeams: 8,
    tournamentGame: "Counter Strike"
}

export const signUpInitialState: SignUp = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gamerTag: "",
    phone: 0

}

export const logInInitialState: LogIn = {
    email: "",
    password: ""
}

export const tournamentGameTypes = ["All","Counter Strike", "League of Legends", "Rocket League", "Scrabble", "Fortnite","Speed Running","Hearthstone","Apex Legends", "Other"]

export const inputTournamentGameTypes = ["Counter Strike", "League of Legends", "Rocket League", "Scrabble", "Fortnite","Speed Running","Hearthstone","Apex Legends", "Other"]

export const bracketInitialState = new Map<number, Match[]>()