import React from 'react';
import {
    Text,
    StatusBar,
    View,
    Image,
} from "react-native";
import styles from "./styles";

const ElomiasAvatar = require("../../assets/images/avatar.png");


const Index = ({
    backCallback,
    navigation
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatarImage}
                    source={ElomiasAvatar}
                />
                <Text
                    style={styles.avatarText}
                >
                    Elomia
                </Text>
            </View>
        </View>
    );
};

export default Index;