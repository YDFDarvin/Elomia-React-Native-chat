import React, {
    useCallback
} from 'react';
import {
    View,
    StatusBar,
    Dimensions
} from 'react-native';
import Header from "../Header";
import Chat from "../Chat";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomePage = ({
    navigation
}) => {
    const goBack = useCallback(() => navigation.goBack(), [navigation])
    //realize fetch data and async getting data

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
                    height: screenHeight - StatusBar.currentHeight - 94,
                    justifyContent: "flex-end"
                }}
            >
                <Chat />
            </View>
        </View>
    );
};

export default HomePage;




