import { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

type navigateProp = { navigate: any };

const StatsScreen = ({ navigate }: navigateProp) => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [clickPower, setClickPower] = useState(1);

    const pointIncrease = () => {
        setTotalPoints(totalPoints + clickPower);
    };

    return (
        <View>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.navButton}
                onPress={() => navigate("Home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StatsScreen;

const styles = StyleSheet.create({
    navButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#fdca96",
        borderRadius: 100,
    },
    button: {
        backgroundColor: "green",
        paddingVertical: 100,
        paddingHorizontal: 75,
        borderRadius: 1000,
    },
    tapContainer: {
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
