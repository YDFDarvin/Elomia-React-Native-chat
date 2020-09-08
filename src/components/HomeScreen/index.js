import React, {
    useCallback
} from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import Header from "../Header/index";
import {
    useSelector
} from "react-redux";

const HomePage = ({
    navigation
}) => {
    const goBack = useCallback(() => navigation.goBack(), [navigation])
    const messages = useSelector(state => state.HomePageReducer.messages);

    //realize fetch data and async getting data

    return (
        <View

        >
            <Header
                backCallback={goBack}
                navigation={navigation}
                cogVisible={true}
                arrowVisible={false}
            />
            <Text>Beta</Text>
        </View>
    );
};

export default HomePage;




