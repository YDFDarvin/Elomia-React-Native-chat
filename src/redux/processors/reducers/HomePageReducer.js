import {
    SELECT_FEMALE_TOPLISTS,
} from "../../actions";

import {
    ALL_GENDER,
    MALE_GENDER,
    FEMALE_GENDER
} from "../../../consts";

const initialState = {
    messages: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_FEMALE_TOPLISTS:
            state.messages.push({
                ...action.payload.message,
                author: "Elomia"
            });

            return {
                ...state
            };
    }

    return state;
}
