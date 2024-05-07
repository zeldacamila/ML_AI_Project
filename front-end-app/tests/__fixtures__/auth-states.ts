export const initialState = {
    status: 'no-authenticated', 
    user: undefined,
    isLoadingAuth: true,
}

export const authenticatedState = {
    status: 'authenticated', 
    user: {
        username: "test1",
        email: "test1@gmail.com",
        id: "ABC"
    },
    isLoadingAuth: true,
}

export const noAuthenticatedState = {
    status: 'no-authenticated', 
    user: undefined,
    isLoadingAuth: true,
}