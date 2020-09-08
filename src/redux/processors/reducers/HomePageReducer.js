import {
    CHANGE_INPUT,
} from "../../actions";

const initialState = {
    messages: [
        {
            created_at: 1599602129979,
            text: "Great! Thanks! Can you also check notebooks for me?",
            isMyMessage: true,
        }, {
            created_at: 1599602129979,
            text: "I was planning to buy a book for you today",
            isMyMessage: false,
        }, {
            created_at: 1599602149979,
            text: "Which one you like?",
            isMyMessage: false,
        }, {
            created_at: 1599602149979,
            text: "Great! Thanks! Can you also check notebooks for me?",
            isMyMessage: true,
        },
    ],
    input: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            console.log(action.payload.message)
            return {
                ...state,
                input: action.payload.message
            }
        //case push new message
        case null:
            return {
                ...state,
                messages: state.messages.push({
                    ...action.payload.message,
                    isMyMessage: "Elomia"
                })
            };
        //load messages from remote source
        case null:
            return {
                ...state,
                messages: state.messages.push({
                    ...action.payload.message,
                    isMyMessage: "Elomia"
                })
            };
    }

    return state;
}
