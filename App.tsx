import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UpgradeScreen from "./components/upgradeScreen";
import HomeScreen from "./components/clickerScreen";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            HomeScreen: any;
            UpgradeScreen: any;
        }
    }
}

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("Home");

    // FUNCTION TO NAVIGATE BETWEEN HOME AND UPGRADES
    const navigate = (screenName) => {
        setCurrentScreen(screenName);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case "Home":
                return <HomeScreen navigate={navigate} />;
            case "Upgrades":
                return <UpgradeScreen navigate={navigate} />;
            default:
                return <Text>404 - Screen not found</Text>;
        }
    };

    return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        paddingVertical: 5,
        paddingHorizontal: 10,
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
