import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./statsScreen.styles";

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
