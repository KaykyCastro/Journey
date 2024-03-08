import { View, Text,Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get("screen");


export default function (){
    return(
        <View style={{alignItems: 'center', marginTop: height / 5 }}>
             <Text
                style={{color: '#9F9F9F',textAlign: 'center', fontSize: RFValue(9), width: width - 60}}
            >Este app é protegido por reCaptcha todos os direitos garantidos, <Text style={{ color: 'black', textDecorationLine: 'underline', fontSize: RFValue(10) }}>Políticas de privacidade</Text> e <Text style={{ color: 'black', textDecorationLine: 'underline', fontSize: RFValue(10)}}>
             Termos de uso</Text>.</Text>
        </View>
    )
}