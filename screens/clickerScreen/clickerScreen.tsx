import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./clickerScreen.styles";

// CUSTOM COMPONENTS
import CustomTouchButton from "../../components/customButton";
import CurrencyBanner from "../../components/currencyBanner";

type homeScreenProps = {
    navigate: any;
    pointIncrease: any;
    totalPoints: number;
};

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
                <CurrencyBanner totalPoints={totalPoints} />
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
