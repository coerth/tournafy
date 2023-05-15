import { Player, Team, Match, Tournament, SignUp, LogIn,  } from "./types"
import { dateFormatForm } from "../utility/date"

export const  playerInitialState: Player = {
    name: "default"
}

export const teamInitialState: Team = {
    name: "default",
    captain: playerInitialState,
    players: [playerInitialState]
}

export const teamInputInitialState = {
    name: "default",
    captain: "default",
    players: new Array<String>
}

export const matchInitialState: Match = {
    location: "default",
    winner: teamInitialState,
    score: [0,0],
    stage: 0,
    teams: [teamInitialState]
}

export const tournamentInitialState: Tournament = {
    name: "default",
    startDate: dateFormatForm(new Date()),
    endDate: "2050-12-31",
    maxTeams: 0,
    minTeams: 0,
    matches: [matchInitialState],
    teams: [teamInitialState],
}

export const tournamentInputInitialState: Tournament = {
    name: "default",
    maxTeams: 0,
    minTeams: 0
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