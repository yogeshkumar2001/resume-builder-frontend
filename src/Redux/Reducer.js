let initialState = {
    choosedTemplate: {
        id: null, path: null
    },
    detailsStep: { value: 0 }
}
const appReducer = function reduxReducer(state = initialState, action) {
    switch (action.type) {
        case "CHOOSED_TEMPLATE":
            return { ...state, choosedTemplate: action.payload }
        case "INCREASE_STEP":
            return {...state,detailsStep:action.payload}
        case "DECREASE_STEP":
            return {...state,detailsStep:action.payload}
        default:
            return state;
    }
}
module.exports = appReducer;