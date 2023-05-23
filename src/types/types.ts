export type Player = {
    _id?: string,
    name: string,
    gamerTag?: string,
    email?: string,
    phone?: number
    hash_password?: string
    role?: string
}

export type Team = {
    _id?: string,
    name: string,
    captain: Player,
    players?: Player[]
    tournaments?: Tournament[]
}

export type Match = {
    _id?: string,
    location?: string,
    winner?: Team,
    score?: number[],
    stage: number
    teams?: Team[]
}

export type Tournament = {
    _id?: string,
    name: string,
    startDate?: string,
    endDate?: string,
    tournamentType?: string,
    tournamentGame?: string,
    maxTeams: number,
    minTeams: number,
    matches?: Match[],
    teams?: Team[]
}

export type SignUp = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    gamerTag: string,
    phone: number
}

export type LogIn = {
    email: string,
    password: string
}

export type Args = {
    id: string;
    // input: PersonInput | Address | Mechanic;
};

// export type PersonInput = {
//     name: string,
//     age?: number,
//     address?: string
// },