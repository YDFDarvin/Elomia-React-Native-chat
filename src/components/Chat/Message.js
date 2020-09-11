import React, {
    useMemo,
    useRef
} from 'react';
import {
    Text, View
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Message = ({
    text,
    isMyMessage,
    created_at,
    index,
    isPrevMessageMine,
    isNextMessageMine
}) => {
    const createdAt = useMemo(() => created_at, [created_at])
    const textMessage = useMemo(() => text, [text])

    let marginTop = 7;
    let marginBottom = 0;

    let borderBottomLeftRadius = 20;
    let borderBottomRightRadius = 20;
    let borderTopLeftRadius = 20;
    let borderTopRightRadius = 20;

    if (isMyMessage === isPrevMessageMine) {
        marginTop = 24
    }

    return (
            <Text
                style={{
                    fontFamily: "GilroyMedium",
                    color: isMyMessage ? "white" : "#07144A",

                    padding: 0,
                    margin: 0,

                    fontSize: RFValue(16),
                    textAlign: "left",

                    backgroundColor: isMyMessage ? "#5C74DD" : "white",

                    paddingRight: 50,
                    paddingLeft: 13,
                    paddingTop: 11,
                    paddingBottom: 15,

                    marginRight: 18,
                    marginLeft: 18,
                    marginTop,
                    marginBottom,

                    borderBottomRightRadius: isMyMessage ? 3 : 20,
                    borderBottomLeftRadius: !isMyMessage ? 3 : 20,
                    borderTopLeftRadius,
                    borderTopRightRadius,

                    alignSelf: isMyMessage ? "flex-end" : "flex-start",
                }}
    /*
                onLayout={}
    */
            >
                {textMessage}
            </Text>
    );
};

export default Message;