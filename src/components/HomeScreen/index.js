import React, {
    useCallback,
    useEffect,
    useState
} from 'react';
import {
    View,
    StatusBar,
    Keyboard,
    Dimensions
} from 'react-native';
import Header from "../Header";
import Chat from "../Chat";

import {
    KEYBOARD_DID_SHOW,
    KEYBOARD_DID_HIDE
} from "../../consts";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const headerHeight = 94;

const HomePage = ({
    navigation
}) => {
    const goBack = useCallback(() => navigation.goBack(), [navigation])
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        Keyboard.addListener(KEYBOARD_DID_SHOW, _keyboardDidShow);
        Keyboard.addListener(KEYBOARD_DID_HIDE, _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener(KEYBOARD_DID_SHOW, _keyboardDidShow);
            Keyboard.removeListener(KEYBOARD_DID_HIDE, _keyboardDidHide);
        };
    }, []);
    //realize fetch data and async getting data

    const _keyboardDidShow = ({endCoordinates}) => {
        setKeyboardHeight(endCoordinates.height)
    };

    const _keyboardDidHide = ({endCoordinates}) => {
        setKeyboardHeight(endCoordinates.height)
    };

    return (
        <View
            style={{
                height: "100%",
                backgroundColor: "#EFF3FF"
            }}
        >
            <Header
                backCallback={goBack}
                navigation={navigation}
            />
            <View
                style={{
                    height: screenHeight - StatusBar.currentHeight - headerHeight - keyboardHeight,
                    justifyContent: "flex-end"
                }}
            >
                <Chat keyboardHeight={keyboardHeight}/>
            </View>
        </View>
    );
};

export default HomePage;




