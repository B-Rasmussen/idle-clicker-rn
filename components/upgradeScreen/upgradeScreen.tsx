import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import upgradeData from "./upgradeData";
import styles from "./upgradeScreen.styles";

interface upgradeData {
    [key: string]: number;
}

type ItemProps = {
    image: Image;
    title: string;
    upgradeName: string;
    cost: number;
    upgradePurchase: (cost: number, upgradeName: string) => void;
    upgradeTotalOwned: any;
};
type upgradeScreenProp = {
    navigate: any;
    totalPoints: number;
    upgradePurchase: (cost: number, upgradeName: string) => void;
    upgradeTotalOwned: any;
};

// const clickPowerIncrease = () => {
//     if (totalPoints > clickPower) {
//         setClickPower(clickPower + 1);
//         setTotalPoints(totalPoints - clickPower);
//     }
// };

const Item = ({
    image,
    title,
    upgradeName,
    cost,
    upgradePurchase,
}: // upgradeTotalOwned,
ItemProps) => (
    <TouchableOpacity
        activeOpacity={1}
        onPress={() => upgradePurchase(cost, upgradeName)}
    >
        <View style={styles.upgradeButton}>
            <View style={styles.upgradeButtonTextContainer}>
                <Image
                    source={image as ImageSourcePropType}
                    style={styles.image}
                />
                <Text style={styles.upgradeButtonText}>{title}</Text>
                <Text style={styles.upgradeButtonText}>Cost: {cost}</Text>
            </View>
            <Text style={styles.upgradeButtonText}>
                {/* Total Owned: {upgradeTotalOwned} */}
            </Text>
        </View>
    </TouchableOpacity>
);

const UpgradeScreen = ({
    navigate,
    totalPoints,
    upgradePurchase,
    upgradeTotalOwned,
}: upgradeScreenProp) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigate("Home")}
                style={styles.button}
            >
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <Text>total currency: {totalPoints}</Text>
            <FlatList
                data={upgradeData}
                renderItem={({ item }) => (
                    <Item
                        title={item.title}
                        image={item.image}
                        upgradeName={item.upgradeName}
                        cost={item.baseCost}
                        upgradePurchase={upgradePurchase}
                        upgradeTotalOwned={upgradeTotalOwned[item.id]}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UpgradeScreen;
