type InitStateType = {
    isLoading: boolean
}

type ActionType = {
    type: "TOGGLE_LOADING"
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {isLoading: !state.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (): ActionType => ({
    type: "TOGGLE_LOADING"
}) // fix any