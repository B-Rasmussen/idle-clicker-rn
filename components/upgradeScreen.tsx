import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
} from "react-native";
import upgradeData from "./upgradeData";

interface upgradeData {
    [key: string]: number;
}

type ItemProps = {
    image: Image;
    title: string;
    upgradeName: string;
    cost: number;
    upgradePurchase: (cost: number, upgradeName: string) => void;
    // upgradeTotalOwned: Array<upgradeData>;
};
type upgradeScreenProp = {
    navigate: any;
    totalPoints: number;
    upgradePurchase: (cost: number, upgradeName: string) => void;
    // upgradeTotalOwned: Array<upgradeData>;
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
}: // upgradeTotalOwned,
upgradeScreenProp) => {
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
                // extraData={upgradeTotalOwned}
                renderItem={({ item }) => (
                    <Item
                        title={item.title}
                        image={item.image}
                        upgradeName={item.upgradeName}
                        cost={item.cost}
                        upgradePurchase={upgradePurchase}
                        // upgradeTotalOwned={upgradeTotalOwned}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UpgradeScreen;

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
