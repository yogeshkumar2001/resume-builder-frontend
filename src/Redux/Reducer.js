let initialState = {
    chooseTemplate: {}
}
const appReducer = function reduxReducer(state = initialState, action) {
    switch (action.type) {
        case "CHOOSE_TEMPLATE":
            return { ...state, chooseTemplate: action.payload }
        default:
            return state;
    }
}
module.exports = appReducer;