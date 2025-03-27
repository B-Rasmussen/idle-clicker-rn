import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./statsScreen.styles";

// CUSTOM COMPONENTS
import CustomTouchButton from "../../components/customButton";

type navigateProp = { navigate: any };

const StatsScreen = ({ navigate }: navigateProp) => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [clickPower, setClickPower] = useState(1);

    const pointIncrease = () => {
        setTotalPoints(totalPoints + clickPower);
    };

    return (
        <View>
            <CustomTouchButton
                buttonName="Home"
                onButtonPressed={() => navigate("Home")}
                buttonStyle={styles.navButton}
            />
        </View>
    );
};

export default StatsScreen;
