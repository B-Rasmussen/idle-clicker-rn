import { Text, TouchableOpacity, View, Image, ImageSourcePropType } from "react-native";

// TODO
// SPLIT UPGRADE SCREEN STYLESHEET OR MOVE STYLESHEETS TO SEPARATE FOLDER
import styles from "../screens/upgradeScreen/upgradeScreen.styles";

type ItemProps = {
    image: Image;
    title: string;
    upgradeName: string;
    cost: number;
    passivePointsIncrease: number;
    upgradePurchase: (cost: number, upgradeName: string, passivePointsIncrease: number) => void;
    upgradeTotalOwned: any;
};

const UpgradeButton = ({
    image,
    title,
    upgradeName,
    cost,
    passivePointsIncrease,
    upgradePurchase,
    upgradeTotalOwned,
}: ItemProps) => (
    <TouchableOpacity
        activeOpacity={1}
        onPress={() => upgradePurchase(cost, upgradeName, passivePointsIncrease)}
    >
        <View style={styles.upgradeButton}>
            <View style={styles.upgradeButtonTextContainer}>
                <Image
                    source={image as ImageSourcePropType}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.upgradeButtonText}>{title}</Text>
                    <Text style={styles.upgradeButtonText}>Cost: {cost}</Text>
                    <Text style={styles.upgradeButtonText}>
                        Total Owned: {upgradeTotalOwned}
                    </Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

export default UpgradeButton;
