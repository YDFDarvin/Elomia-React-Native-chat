import React, {
    useCallback,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    View,
    TextInput,
    KeyboardAvoidingView,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import {
    dispatchChangeInput,
    dispatchPushMessage
} from "../../redux/actions";

import styles from "./styles";
import Message from "./Message";

import PlaneLogo from "../../assets/images/🎨IconСolor.svg";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const marginSideOfInput = 18;
const buttonSize = 37;
const sideInputPadding = 22;

const headerHeight = 94;
const marginTopOfInput = 24;
const marginBottomOfInput = 13;

const Index = ({
    keyboardHeight
}) => {
    const messages = useSelector(state => state.HomePageReducer.messages);
    const input = useSelector(state => state.HomePageReducer.input)
    const [bottomInputFormHeight, setBottomInputFormHeight] = useState(200);

    const dispatch = useDispatch();

    const onInputChange = useCallback((val) => dispatch(dispatchChangeInput(val)), [dispatch])
    const onIconPress = useCallback(() => dispatch(dispatchPushMessage({
        created_at: Date.now(),
        isMyMessage: true
    })
    ), [dispatch])

    return (
        <View>
            {
                messages ? (
                    <FlatList
                        style={{
                            marginTop: headerHeight + StatusBar.currentHeight,

                            maxHeight: (
                                screenHeight -
                                StatusBar.currentHeight -
                                headerHeight -
                                keyboardHeight -
                                bottomInputFormHeight -
                                marginTopOfInput -
                                marginBottomOfInput
                            )
                        }}
                        contentContainerStyle={{

                        }}
                        data={messages}
                        inverted={true}
                        renderItem={({item, index}) => {
                            let marginTop = 7;
                            let marginBottom = 0;

                            let borderBottomLeftRadius = 20;
                            let borderBottomRightRadius = 20;
                            let borderTopLeftRadius = 20;
                            let borderTopRightRadius = 20;

                            return (
                                <View
                                    style={{
                                        backgroundColor: item.isMyMessage ? "#5C74DD" : "white",

                                        paddingRight: 50,
                                        paddingLeft: 13,
                                        paddingTop: 11,
                                        paddingBottom: 15,

                                        marginRight: 18,
                                        marginLeft: 18,
                                        marginTop,
                                        marginBottom,

                                        borderBottomRightRadius: item.isMyMessage ? 3 : 20,
                                        borderBottomLeftRadius: !item.isMyMessage ? 3 : 20,
                                        borderTopLeftRadius,
                                        borderTopRightRadius,
                                    }}
                                >
                                    <Message {...item} />
                                </View>
                            )
                        }}
                        keyExtractor={({item, index}) => index}
                    />
                ) : null
            }


            <View
                style={{
                    opacity: 0.8,

                    paddingBottom: marginBottomOfInput,
                    paddingTop: marginTopOfInput,
                    paddingLeft: marginSideOfInput,
                    paddingRight: marginSideOfInput,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",

                        backgroundColor: "white",

                        paddingLeft: sideInputPadding,

                        borderRadius: 25,

                        maxHeight: '20%',
                        minHeight: 50
                    }}
                    onLayout={(e) => setBottomInputFormHeight(e.nativeEvent.layout.height)}
                >
                    <TextInput
                        multiline
                        maxLength={500}
                        style={{
                            flexDirection: "row",
                            width: screenWidth - buttonSize - 2 * marginSideOfInput - sideInputPadding - 12,
                            color: "#07144A",
                            textAlign: "left",
                            fontFamily: "GilroyMedium",
                            fontSize: 18,

                        }}
                        placeholder="Write a message"
                        placeholderTextColor="#9AADDE"
                        onChangeText={onInputChange}
                        defaultValue={input}
                    />
                    <TouchableOpacity
                        style={{
                            width: buttonSize,
                            aspectRatio: 1,
                            justifyContent: "center",
                        }}
                        onPress={onIconPress}
                    >
                        <PlaneLogo/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Index;