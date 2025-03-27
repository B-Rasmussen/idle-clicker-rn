import { TouchableOpacity, Text } from "react-native";

type customButtonProps = {
    buttonName: string;
    onButtonPressed: any;
    buttonStyle?: any;
    textStyle?: any;
    activeOpacity?: number;
};

const CustomTouchButton = ({
    buttonName,
    onButtonPressed,
    buttonStyle,
    textStyle,
    activeOpacity = 1,
}: customButtonProps) => {
    return (
    <TouchableOpacity onPress={onButtonPressed} style={buttonStyle} activeOpacity={activeOpacity}>
        <Text style={textStyle}>{buttonName}</Text>
    </TouchableOpacity>
    )
};

export default CustomTouchButton;
