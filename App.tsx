import { SetStateAction, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UpgradeScreen from "./components/upgradeScreen/upgradeScreen";
import HomeScreen from "./components/clickerScreen/clickerScreen";
import StatsScreen from "./components/statsScreen/statsScreen";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            HomeScreen: any;
            UpgradeScreen: any;
            StatsScreen: any;
            pointIncrease: number;
            upgradeTotalOwned: upgradeData;
        }
    }
}

type upgradeData = {
    [key: string]: number;
};

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("Home");
    const [totalPoints, setTotalPoints] = useState(0);
    const [lifetimeClicks, setLifetimeClicks] = useState(0);
    const [passivePoints, setPassivePoints] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [upgradeTotalOwned, setUpgradeTotalOwned] = useState<upgradeData>({
        clickerUpgrade: 0,
        upgrade1: 0,
        upgrade2: 0,
        upgrade3: 0,
        upgrade4: 0,
        upgrade5: 0,
    });

    // FUNCTION TO NAVIGATE BETWEEN SCREENS
    const navigate = (screenName: SetStateAction<string>) => {
        setCurrentScreen(screenName);
    };

    const pointIncrease = () => {
        setTotalPoints(totalPoints + clickPower);
        setLifetimeClicks(lifetimeClicks + 1)
    };

    useEffect(() => {
        const passivePointIncrease = setInterval(() => {
            setTotalPoints((prevTotal) => prevTotal + passivePoints);
        }, 1000);

        return () => clearInterval(passivePointIncrease);
    }, [passivePoints]);

    const upgradePurchase = (upgradeCost: number, upgradeName: string) => {
        if (totalPoints >= upgradeCost) {
            if (upgradeName == 'clickerUpgrade') {
                setClickPower(clickPower + 1);
            }
            setTotalPoints(totalPoints - upgradeCost);
            upgradeOwnedIncrease(upgradeName);
        }
    };

    const upgradeOwnedIncrease = (upgradeName: string) => {
        setUpgradeTotalOwned((prevState) => ({
            ...prevState,
            [upgradeName]: (prevState[upgradeName] || 0) + 1,
        }));
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case "Home":
                return (
                    <HomeScreen
                        navigate={navigate}
                        pointIncrease={pointIncrease}
                        totalPoints={totalPoints}
                    />
                );
            case "Upgrades":
                return (
                    <UpgradeScreen
                        navigate={navigate}
                        totalPoints={totalPoints}
                        upgradePurchase={upgradePurchase}
                        upgradeTotalOwned={upgradeTotalOwned}
                    />
                );
            case "Stats":
                return <StatsScreen navigate={navigate} />;
            default:
                return <Text>oops something went wrong</Text>;
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
