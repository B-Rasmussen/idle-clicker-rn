import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./clickerScreen.styles";

type homeScreenProps = { navigate: any; pointIncrease: any; totalPoints: any };

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
