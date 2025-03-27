import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./clickerScreen.styles";

// CUSTOM COMPONENTS
import CustomTouchButton from "../../components/customButton";


type homeScreenProps = { navigate: any; pointIncrease: any; totalPoints: any };

const HomeScreen = ({
    navigate,
    pointIncrease,
    totalPoints,
}: homeScreenProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.navButtonContainer}>
                <CustomTouchButton
                    buttonName="Stats"
                    onButtonPressed={() => navigate("Stats")}
                    buttonStyle={styles.navButton}
                />
                <CustomTouchButton
                    buttonName="Upgrades"
                    onButtonPressed={() => navigate("Upgrades")}
                    buttonStyle={styles.navButton}
                />
            </View>
            <View style={styles.tapContainer}>
                <Text>total taps:</Text>
                <Text>{totalPoints}</Text>
            </View>
            <CustomTouchButton
                buttonName="CLICK ME!"
                onButtonPressed={() => pointIncrease()}
                buttonStyle={styles.button}
                textStyle={styles.text}
            />
        </View>
    );
};

export default HomeScreen;
