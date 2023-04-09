import ObjectID from "bson-objectid"

export type Team =  {
    id?: ObjectID,
    name: string,
    owner: number,
    players: Player[]
}

export type Player = {
    id?: ObjectID,
    name: string,
    gamerTag: string,
    email: string,
    phone: number
}

export type Match = {
    id?: ObjectID,
    location: string,
    date: string,
    winner: number,
    score: number[],
    stage: number,
    teams: Team[]
}

export type Tournament = {
    id?: ObjectID,
    startDate: string,
    endDate: string,
    gameType: string,
    tournamentWinner?: number,
    maxTeams: number,
    minTeams: number,
    matches: Match[],
    teams: Team[]
}

