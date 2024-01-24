export function updateTemplateData(data) {
    return function (dispatch) {
        dispatch({
            type: "CHOOSE_TEMPLATE",
            payload: data
        })
    }
}

