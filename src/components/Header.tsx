import { View,Text, TouchableOpacity, Dimensions } from "react-native"
import { CaretLeft } from "phosphor-react-native"
import { RFValue } from "react-native-responsive-fontsize"

const {height, width} = Dimensions.get("screen")

interface ChildProps {
    onPress: ()=> void;
}
export default function Header({onPress}: ChildProps){
    return(
        <View
        style={{
            marginTop: height / 46,
            padding: 4,
        }}
    >
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: width / 28,
                width: width / 5,
                height: height / 28
            }}
           onPress={onPress}
        >
            <CaretLeft color="#007AFF" weight="bold" size={RFValue(18)} />
            <Text
                style={{
                    color: '#0A84FF',
                    fontWeight: '500',
                    fontSize: RFValue(11),
                }}
            >Back</Text>
        </TouchableOpacity>
    </View>
    )
}