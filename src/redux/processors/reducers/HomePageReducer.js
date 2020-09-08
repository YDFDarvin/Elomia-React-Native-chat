import {
    SELECT_FEMALE_TOPLISTS,
} from "../../actions";

import {
    ALL_GENDER,
    MALE_GENDER,
    FEMALE_GENDER
} from "../../../consts";

const initialState = {
    messages: [
        {
            created_at: Date.now(),
            text: "Great! Thanks! Can you also check notebooks for me?",
            isMyMessage: true,
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
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
