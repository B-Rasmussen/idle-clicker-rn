import { Text } from "react-native";

type ButtonProps = {
    currencyText?: string;
    totalPoints: number;
};

const CurrencyBanner = ({ currencyText = 'total clicks: ', totalPoints }: ButtonProps) => (
    <Text>{currencyText} {parseFloat(totalPoints.toFixed(0))}</Text>
);

export default CurrencyBanner;
