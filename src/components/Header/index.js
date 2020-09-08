import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faAngleLeft, faCog} from "@fortawesome/free-solid-svg-icons";

const Index = ({
    cogVisible,
    arrowVisible,
    backCallback,
    navigation
}) => {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#E2E2E2"
        }}>
            {
                arrowVisible ?
                    (<View
                        style={{
                            display: "flex",
                            marginLeft: 20,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => backCallback()}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} size={32} color={"#A6AAB4"}/>
                        </TouchableOpacity>
                    </View>)
                    : (<View
                        style={{
                            display: "flex",
                            marginLeft: 52,
                        }}
                    >
                    </View>)
            }

            <Text
                style={{
                    fontFamily: "Lobster",
                    fontSize: 35,
                    color: "#F69974"
                }}
            >
                MyLogo
            </Text>

            {
                cogVisible ?
                    (<View
                        style={{
                            display: "flex",
                            marginRight: 20
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Settings')}
                        >
                            <FontAwesomeIcon icon={faCog} size={32} color={"#A6AAB4"}/>
                        </TouchableOpacity>
                    </View>)
                    : (<View
                        style={{
                            display: "flex",
                            marginRight: 52,
                        }}
                    >
                    </View>)
            }

        </View>
    );
};

export default Index;