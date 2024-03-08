import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RFValue } from "react-native-responsive-fontsize";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

import ButtonBlue from "../ButtonBlue";

const { height, width } = Dimensions.get('screen');

import Header from "../Header";

type FormData = {
    name: string;
    birthDay: string;
    cpf: string;
}


export default function UserData({ cpf }: FormData) {

    const { handleSubmit, control, formState: { errors } } = useForm();
    useEffect(() => console.log(errors?.name), [errors?.name])

    const navigate = useNavigation();
    const handleBackNavigation = () => {
        navigate.goBack();
    }

    const onSubmit = ()=>{
        
    }



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                backgroundColor: 'white',
            }}>

                <Header onPress={handleBackNavigation} />

                <View style={{ alignItems: 'center', marginTop: height / 14 }}>
                    <View>
                        <Text style={{ fontWeight: '600', fontSize: RFValue(28) }}>
                            Falta pouco
                        </Text>

                        <Text style={{ fontSize: RFValue(12), fontWeight: '400', width: width - 60 }}>Precisamos do seu nome e data de nascimento agora</Text>
                    </View>

                    <View>
                        <Controller
                            control={control}
                            name="cpf"
                            rules={{
                                required: 'Por favor insira seu nome',
                                minLength: 3
                            }}

                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    style={{
                                        fontWeight: '500',
                                        fontSize: RFValue(10),
                                        width: width - 50,
                                        height: height / 15,
                                        padding: 8,
                                        borderRadius: 12,
                                        marginTop: height / 28,
                                        backgroundColor: '#F2F2F2'
                                    }}
                                    placeholder='Insira seu nome'
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                />
                            )}>
                        </Controller>
                    </View>

                    <View>
                        {errors.name ? <Text>Deu erro</Text> : <Text></Text>}
                    </View>

                    <ButtonBlue name="Continuar" onPress={handleSubmit(onSubmit)} />

                </View>
            </View>
        </View>
    )
}