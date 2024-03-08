import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get("screen");

interface ChildProps {
    onPress: ()=> void;
    name: string;
}


export default function ButtonBlue(props: ChildProps){
    return(
        <View>
             <TouchableOpacity
                style={{
                    width: width - 50,
                    height: height / 14,
                    marginTop: 12,
                    borderRadius: 14,
                    padding: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#007AFF'
                }}
                onPress={props.onPress}
               >

                <Text
                    style={{
                        position: 'absolute',
                        color: 'white',
                        fontWeight: '500',
                        fontSize: RFValue(10)
                    }}
                >
                  {props.name}
                </Text>

            </TouchableOpacity>
        </View>
    )
}