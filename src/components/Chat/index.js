import React, {
    useCallback
} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    View,
    TextInput,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import {
    dispatchChangeInput
} from "../../redux/actions";

import styles from "./styles";
import Message from "./Message";

import PlaneLogo from "../../assets/images/🎨IconСolor.svg";

const screenWidth = Dimensions.get('window').width;
const marginSideOfInput = 18;
const buttonSize = 37;
const sideInputPadding = 22;

const Index = () => {
    const messages = useSelector(state => state.HomePageReducer.messages);
    const input = useSelector(state => state.HomePageReducer.input)

    const dispatch = useDispatch();

    const onInputChange = useCallback((val) => dispatch(dispatchChangeInput(val)), [dispatch])

    return (
        <View>
            {
                messages ? (
                    <FlatList
                        data={messages}
                        renderItem={({item}) => (
                                <View
                                    style={{

                                        backgroundColor: item.isMyMessage ? "yellow" : "red",
                                    }}
                                >
                                    <Message {...item} />
                                </View>
                            )}
                        keyExtractor={({item, index}) => index}
                    />
                ) : null
            }

            <KeyboardAvoidingView
                behavior='position'
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",

                        backgroundColor: "white",

                        marginBottom: 13,
                        marginTop: 24,
                        marginLeft: marginSideOfInput,
                        marginRight: marginSideOfInput,

                        paddingLeft: sideInputPadding,

                        borderRadius: 25,
                    }}
                >
                    <TextInput
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
                    >
                        <PlaneLogo/>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Index;