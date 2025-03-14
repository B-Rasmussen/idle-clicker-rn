import { FlatList, Text, TouchableOpacity, View, Image, Button, StyleSheet } from "react-native";
import upgradeData from "./upgradeData";

type ItemProps = { title: string; cost: number; owned: number; };
type navigateProp = { navigate: any; }

// const clickPowerIncrease = () => {
//     if (totalPoints > clickPower) {
//         setClickPower(clickPower + 1);
//         setTotalPoints(totalPoints - clickPower);
//     }
// };

const Item = ({ title, cost, owned }: ItemProps) => (
    <TouchableOpacity>
        <View>
            <Image src="assets/icon.png" />
            <Text>{title}</Text>
            <Text>Cost: {cost}</Text>
            <Text>Total Owned: {owned}</Text>
        </View>
    </TouchableOpacity>
);

const UpgradeScreen = ({ navigate }: navigateProp) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate("Home")} style={styles.button}><Text style={styles.text}>Home</Text></TouchableOpacity>
            <FlatList
                data={upgradeData}
                renderItem={({ item }) => (
                    <Item
                        title={item.title}
                        cost={item.cost}
                        owned={item.totalOwned}
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
        backgroundColor: '#fdca96',
        borderRadius: 100,
    },
    text: {
        color: "#fff",
        fontSize: 18,
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