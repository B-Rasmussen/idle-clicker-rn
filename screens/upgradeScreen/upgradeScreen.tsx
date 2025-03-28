import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import upgradeData from "./upgradeData";
import styles from "./upgradeScreen.styles";

// CUSTOM COMPONENTS
import CustomTouchButton from "../../components/customButton";
import UpgradeButton from "../../components/upgradeButton";
import CurrencyBanner from "../../components/currencyBanner";

interface upgradeData {
    [key: string]: number;
}

type upgradeScreenProp = {
    navigate: any;
    totalPoints: number;
    upgradePurchase: (cost: number, upgradeName: string, passivePointsIncrease: number) => void;
    upgradeTotalOwned: any;
};

const UpgradeScreen = ({
    navigate,
    totalPoints,
    upgradePurchase,
    upgradeTotalOwned,
}: upgradeScreenProp) => {
    return (
        <View style={styles.container}>
            <CustomTouchButton
                buttonName={"Home"}
                onButtonPressed={() => navigate("Home")}
                buttonStyle={styles.button}
                textStyle={styles.text}
            />
            <CurrencyBanner totalPoints={totalPoints} />
            <FlatList
                data={upgradeData}
                renderItem={({ item }) => (
                    <UpgradeButton
                        title={item.title}
                        image={item.image}
                        upgradeName={item.upgradeName}
                        cost={item.baseCost}
                        passivePointsIncrease={item.passivePointsIncrease}
                        upgradePurchase={upgradePurchase}
                        upgradeTotalOwned={
                            upgradeTotalOwned[item.upgradeName] == undefined
                                ? 0
                                : upgradeTotalOwned[item.upgradeName]
                        }
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UpgradeScreen;
