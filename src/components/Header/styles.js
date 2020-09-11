import {StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A4B3EA",
        zIndex: 999
    },
    avatarContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatarImage: {
        borderRadius: 99,
        margin: 10,
        width: 50,
        aspectRatio: 1,
        marginLeft: 16
    },
    avatarText: {
        fontFamily: "LatoBold",
        color: "white",
        fontSize: 22,
        fontWeight: "bold"
    }
});