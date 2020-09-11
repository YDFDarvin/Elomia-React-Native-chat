import {
    CHANGE_INPUT,
    PUSH_MESSAGE,
    LOAD_DATA
} from "../../actions";

const initialState = {
    messages:  [
        {
            "created_at": 1599602149979,
            "isMyMessage": true,
            "text": "Y"
        }, {
            "created_at": 1599602149979,
            "isMyMessage": true,
            "text": "Great! Thanks! Can you also check notebooks for me? Last message"
        }, {
            "created_at": 1599602149979,
            "isMyMessage": false,
            "text": "Which one you like?"
        }, {
            "created_at": 1599602129979,
            "isMyMessage": false,
            "text": "I was planning to buy a book for you today"
        }, {
            "created_at": 1599602129979,
            "isMyMessage": true,
            "text": "Great! Thanks! Can you also check notebooks for me?"
        }, {
            "created_at": 1599602149979,
            "isMyMessage": true,
            "text": "Great! Thanks! Can you also check notebooks for me? Last message"
        }, {
            "created_at": 1599602149979,
            "isMyMessage": false,
            "text": "Which one you like?"
        }, {
            "created_at": 1599602129979,
            "isMyMessage": false,
            "text": "I was planning to buy a book for you today"
        }, {
            "created_at": 1599602129979,
            "isMyMessage": true,
            "text": "Great! Thanks! Can you also check notebooks for me?"
    }]
    ,
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
            if (state.input) {
                state.messages.unshift({
                    ...action.payload.message,
                    text: state.input
                })
                state.input = "";
            }

            return {
                ...state
            };
        //load messages from remote source
        case LOAD_DATA:
            return {
                ...state,
                messages: action.payload.messages,
            };
    }

    return state;
}
