import { View, Text, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get("screen")

export default function TextApresentation(){
    return(
        <View style={{alignItems: 'center'}}>
             <Text style={{ position: 'absolute', color: '#007AFF', textAlign: 'center', fontSize: RFValue(14), fontWeight: '600', top: 38 }}>
                Journey
            </Text>
            <View style={{ marginBottom: 38, marginTop: 140 }}>

                <View>
                    <Text style={{ color: 'black', fontWeight: '800', fontSize: RFValue(30) }}>Olá,Bem vindo!</Text>
                </View>

                <Text numberOfLines={2} style={{ color: '#5A5A5A', fontSize: RFValue(10), fontWeight: '500' }}>
                    Já tem conta? Entre usando seu número de telefone!
                </Text>
            </View>
        </View>
    )
}