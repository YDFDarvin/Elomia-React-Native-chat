export const CHANGE_INPUT = "CHANGE_INPUT";
export const PUSH_MESSAGE = "PUSH_MESSAGE";
export const LOAD_DATA = "LOAD_DATA";

export const FETCH_FROM_RESPONSE_ELOMIA = "FETCH_FROM_RESPONSE_ELOMIA";

export const dispatchFetchDataFromElomia = (text, isMyMessage) => ({
    type: FETCH_FROM_RESPONSE_ELOMIA,
    payload: {
        message: {
            text,
            created_at: Date.now(),
            isMyMessage
        }
    }
});

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