export function updateTemplateData(data) {
    return function (dispatch) {
        dispatch({
            type: "CHOOSED_TEMPLATE",
            payload: data
        })
    }
}

export function increaseStep(data) {
    return function (dispatch) {
        dispatch({
            type: "INCREASE_STEP",
            payload: data
        })
    }
}
export function decreaseStep(data) {
    return function (dispatch) {
        dispatch({
            type: "DECREASE_STEP",
            payload: data
        })
    }
}
export function setUserFormData(data) {
    return function (dispatch) {
        dispatch({
            type: "USER_DETAILS",
            payload: data
        })
    }
}