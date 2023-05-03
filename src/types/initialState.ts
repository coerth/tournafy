import { Player, Team, Match, Tournament } from "./types"

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
    startDate: "default",
    endDate: "default",
    matches: [matchInitialState],
    teams: [teamInitialState]
}