import ObjectID from "bson-objectid"

export type Team =  {
    _id: string,
    name: string,
    captain: string,
    players: Player[],
    slug?: string,
    __v?: number,
    id?: string
}

export type Player = {
    _id: string,
    name: string,
    gamerTag: string,
    email: string,
    phone: number,
    __v: number
}

export type Match = {
    _id: string,
    location: string,
    date: string,
    winner: number,
    score: number[],
    stage: number,
    teams: Team[],
    __v: number
}

export type Tournament = {
    _id: string,
    startDate: string,
    endDate: string,
    gameType: string,
    tournamentWinner?: number,
    maxTeams: number,
    minTeams: number,
    matches: Match[],
    teams: Team[],
    __v: number
}

