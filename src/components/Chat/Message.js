import React, {
    useMemo,
    useRef
} from 'react';
import {
    Text
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Message = ({
    text,
    isMyMessage,
    created_at
}) => {
    const createdAt = useMemo(() => created_at, [created_at])
    const textMessage = useMemo(() => text, [text])

    return (
        <Text
            style={{
                width: "auto",
                fontFamily: "GilroyMedium",
                color: isMyMessage ? "white" : "#07144A",
                padding: 0,
                margin: 0,
                fontSize: RFValue(16),
            }}
            onLayout
        >
            {textMessage}
        </Text>
    );
};

export default Message;