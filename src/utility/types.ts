export type Team =  {
    id: number,
    name: string,
    owner: number,
    players: Player[]
}

export type Player = {
    id?: number,
    name: string,
    gamerTag: string,
    email: string,
    phone: number
}

export type Match = {
    id?: number,
    location: string,
    date: string,
    winner: number,
    score: number[],
    stage: number,
    teams: Team[]
}

export type Tournament = {
    id?: number,
    startDate: string,
    endDate: string,
    gameType: string,
    tournamentWinner?: number,
    maxTeams: number,
    minTeams: number,
    matches: Match[],
    teams: Team[]
}

