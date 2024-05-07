import { ChangeEvent } from "react";
import { typeContextTextsChat, typeRecommendation } from "./type";

export interface TextFieldOptions {
    typeInput: string;
    nameInput: string;
    placeHolder: string;
    valueInput: string;
    onChange: ( { target }: ChangeEvent<HTMLInputElement> ) => void;
}

export interface stateUiSlice {
    errorMessage: boolean;
    contentErrorMessage: string;
}

export interface InputSelectOptions {
    title: string;
    nameInput: string;
    dataOptions: { value: string, label: string }[];
    onInputChange: ( event: { value: string, name: string } ) => void;
}

export interface BoardGamesSlice {
    isLoading: boolean;
    isLoadingRecommendation: boolean;
    dataMachineLearningModel: {};
    recommendationsGames: typeRecommendation[] | [];
    contentTextsChat: typeContextTextsChat[] | [];
    error: undefined | string;
}

export interface StateAuthSlice {
    status: string;
    isLoadingAuth: boolean;
    user?: {
        username: string;
        email: string;
        id: string;
    }; 
}

export type typeDataInputSelects = { 
    title: string, 
    name: string,
    data: { value: string, label: string }[], 
}
