import React, {
    useMemo,
    useRef
} from 'react';
import {
    Text
} from "react-native";

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
                fontFamily: "GilroyMedium",
                color: "black",
                fontSize: 16
            }}
        >
            {textMessage}
        </Text>
    );
};

export default Message;