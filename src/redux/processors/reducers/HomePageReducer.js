import {
    CHANGE_INPUT,
    PUSH_MESSAGE,
    LOAD_DATA
} from "../../actions";

const initialState = {
    messages:  [],
    input: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.payload.message,
            }
        //case push new message
        case PUSH_MESSAGE:
            if (action.payload.message.text) {
                state.messages.unshift({
                    ...action.payload.message,
                })
                state.input = "";
            }

            return {
                ...state
            };
        //load messages from remote source
        case LOAD_DATA:
            state.messages = action.payload.messages;

            return {
                ...state,
            };
    }

    return state;
}
