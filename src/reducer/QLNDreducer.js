const initialState = {
    arrUserDefault: []
}

export const QLNDreducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER_LIST":
            console.log(action.mangUser)
            state.arrUserDefault = action.mangUser
            return { ...state }

        default:
            return state
    }
}