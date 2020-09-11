import { StyleSheet} from 'react-native';

const sideInputPadding = 22;

export default StyleSheet.create({
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "white",

        paddingLeft: sideInputPadding,

        borderRadius: 25,

        maxHeight: '20%',
        minHeight: 50
    }
})