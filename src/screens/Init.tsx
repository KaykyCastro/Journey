import { View, Text, Image, Dimensions, TouchableOpacity,Animated } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ArrowRight } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
//Components

import LogoType from '../../assets/logotype.png';


//Settings
const { width, height } = Dimensions.get('screen');


export default function Init() {
    
    const navigation = useNavigation();

    //Functions
 const hadleNavigation = ()=>{
    navigation.navigate('Auth');    
 }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>

            <Image 
            style={{
                position:'absolute',
                width: width/6,
                height: height/13,
                top: 200
            }}
            source={LogoType}/>
           
         
            <View style={{
                flex: 1,
                justifyContent: 'center',
                marginTop: height - 320,
            }}>

                <View
                style={{width: width - 60}}
                >
                    <Text
                    style={{
                        fontWeight: '600',
                        fontSize: RFValue(38)
                    }}>Journey</Text>
                    <Text
                    numberOfLines={2}
                    style={{
                        textAlign: 'justify',
                        fontWeight: '500',
                        width: width - 80,
                        fontSize: RFValue(9),
                    }}
                    >Você não é apenas um passageiro, mas o protagonista de sua própria jornada.</Text>
                </View>
                {/*Button*/}
                
                <TouchableOpacity
                    style={{
                        width: width - 50,
                        height: height / 15,
                        marginTop: 20,
                        borderRadius: 12,
                        padding: 8,       
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#007AFF'
                    }}
                    onPress={hadleNavigation}
                >
                    <Text
                        style={{
                            position: 'absolute',
                            color: 'white',
                            fontWeight: '500',
                            fontSize: RFValue(10),
                            marginRight: 12
                        }}
                    >Get started</Text>

                    <ArrowRight
                    color="white"
                    size={14}
                    weight="bold"
                    style={{marginLeft: width-120}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}