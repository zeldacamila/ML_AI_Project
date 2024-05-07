export type typeContextTextsChat = { 
    type: string, 
    nameEntity: string, 
    content: string | string[],
}; 

export type typeDataRegister = {
    username: string,
    email: string,
    password: string,
}

export type typeDataLogin = {
    email: string,
    password: string,
}

export type typeRecommendation = {
    title: string;
    description: string;
    creation_date?: Date;
    id?: number;
    user_id?: string;
}

export type typeDataMachineLearning = {
    max_players: number;
    min_players: number;
    max_playtime: number;
    min_playtime: number;
    playtime: number;
    year_published: number;
    avg_rating: number;
    youngest_player_age: number;
}