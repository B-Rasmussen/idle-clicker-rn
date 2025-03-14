import { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

type navigateProp = { navigate: any; }

const HomeScreen = ({ navigate }: navigateProp) => {
    const [totalPoints, setTotalPoints] = useState(0);
    const [clickPower, setClickPower] = useState(1);

    const pointIncrease = () => {
        setTotalPoints(totalPoints + clickPower);
    };

    return (
        <View>
            <Text>total taps:</Text>
            <Text>{totalPoints}</Text>
            <TouchableOpacity onPress={pointIncrease}>
                <Text>CLICK ME!</Text>
            </TouchableOpacity>
            <Button title="Upgrades" onPress={() => navigate("Upgrades")} />
        </View>
    );
};

export default HomeScreen;
