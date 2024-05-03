export type typeContextTextsChat = { 
    type: string, 
    nameEntity: string, 
    content: string 
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