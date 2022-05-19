import {UserType} from "../HW8";

type SortAction = {
    type: 'sort',
    payload: 'up' | 'down'
}

type CheckType = {
    type: 'check',
    payload: number
}

type ActionType = SortAction | CheckType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === "up") {
                return [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
            } else {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
            }
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

