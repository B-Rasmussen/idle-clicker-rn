import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#fdca96",
        borderRadius: 100,
    },
    text: {
        color: "#fff",
        fontSize: 18,
    },
    upgradeButton: {
        paddingVertical: 10,
        paddingHorizontal: 100,
        marginVertical: 5,
        backgroundColor: "#ff00ff",
        borderRadius: 10,
    },
    upgradeButtonTextContainer: {
        flexDirection: "row",
    },
    upgradeButtonText: {
        color: "#fff",
        fontSize: 18,
        paddingHorizontal: 10,
        paddingLeft: -20,
    },
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: "#FFEE8C",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
});

export default styles;
