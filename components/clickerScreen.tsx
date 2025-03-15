import { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

type homeScreenProps = { navigate: any; pointIncrease: any; totalPoints: any; };

const HomeScreen = ({
    navigate,
    pointIncrease,
    totalPoints,
}: homeScreenProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.navButtonContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.navButton}
                    onPress={() => navigate("Stats")}
                >
                    <Text>Stats</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.navButton}
                    onPress={() => navigate("Upgrades")}
                >
                    <Text>Upgrades</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tapContainer}>
                <Text>total taps:</Text>
                <Text>{totalPoints}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => pointIncrease()}
                style={styles.button}
            >
                <Text style={styles.text}>CLICK ME!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

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
        backgroundColor: "yellow",
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
