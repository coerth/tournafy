import { Player, Team, Match, Tournament, SignUp, LogIn,  } from "./types"

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
    startDate: "default",
    endDate: "default",
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