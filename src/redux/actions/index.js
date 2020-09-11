export const CHANGE_INPUT = "CHANGE_INPUT";
export const PUSH_MESSAGE = "PUSH_MESSAGE";
export const LOAD_DATA = "LOAD_DATA";

export const dispatchChangeInput = (message) => ({
    type: CHANGE_INPUT,
    payload: {
        message
    }
});

export const dispatchPushMessage = (message) => ({
    type: PUSH_MESSAGE,
    payload: {
        message
    }
});

export const dispatchLoadData = (message) => ({
    type: LOAD_DATA,
    payload: {
        message
    }
});