const initState = {
    theme: "grey"
};

type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                theme: action.payload.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => ({
    type: "CHANGE_THEME",
    payload: {
        theme
    }
}) as const