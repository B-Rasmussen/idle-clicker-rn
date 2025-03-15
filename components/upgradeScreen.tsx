import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Image,
    Button,
    StyleSheet,
} from "react-native";
import upgradeData from "./upgradeData";

type ItemProps = {
    title: string;
    cost: number;
    owned: number;
    upgradePurchase: (cost: number) => void;
};
type upgradeScreenProp = {
    navigate: any;
    totalPoints: number;
    upgradePurchase: (cost: number) => void;
};

// const clickPowerIncrease = () => {
//     if (totalPoints > clickPower) {
//         setClickPower(clickPower + 1);
//         setTotalPoints(totalPoints - clickPower);
//     }
// };

const Item = ({ title, cost, owned, upgradePurchase }: ItemProps) => (
    <TouchableOpacity 
        activeOpacity={1} 
        onPress={() => upgradePurchase(cost)}
    >
        <View style={styles.upgradeButton}>
            <Image src="assets/icon.png" />
            <View style={styles.upgradeButtonTextContainer}>
                <Text style={styles.upgradeButtonText}>{title}</Text>
                <Text style={styles.upgradeButtonText}>Cost: {cost}</Text>
            </View>
            <Text style={styles.upgradeButtonText}>Total Owned: {owned}</Text>
        </View>
    </TouchableOpacity>
);

const UpgradeScreen = ({ navigate, totalPoints, upgradePurchase }: upgradeScreenProp) => {
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
                        cost={item.cost}
                        owned={item.totalOwned}
                        upgradePurchase={upgradePurchase}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
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
function upgradePurchase(cost: number): void {
    throw new Error("Function not implemented.");
}
