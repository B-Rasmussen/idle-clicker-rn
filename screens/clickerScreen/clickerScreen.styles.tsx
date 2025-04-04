import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navButtonContainer: {
        flexDirection: "row",
    },
    navButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#fdca96",
        borderRadius: 100,
        margin: 10,
    },
    button: {
        backgroundColor: "#aff",
        paddingVertical: 100,
        paddingHorizontal: 75,
        borderRadius: 1000,
        borderColor: "#fdca96",
        borderWidth: 10,
    },
    tapContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "black",
    },
    container: {
        flex: 1,
        backgroundColor: "#FFEE8C",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
});

export default styles;
