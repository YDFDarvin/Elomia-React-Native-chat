export const CHANGE_INPUT = "CHANGE_INPUT";

export const dispatchChangeInput = (message) => ({
    type: CHANGE_INPUT,
    payload: {
        message
    }
});