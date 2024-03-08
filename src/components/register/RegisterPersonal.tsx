import { View, Text, TouchableOpacity, Dimensions, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
const { width, height } = Dimensions.get('screen')

import Header from "../Header";
import ButtonBlue from "../ButtonBlue";

type FormData = {
    cpf: string;
    data: string;
}

export default function RegisterPersonal() {

    const {handleSubmit, control, formState: {errors}} = useForm();
    useEffect(()=> console.log('Cpf erros', errors?.cpf), [errors?.cpf])


    const navigation = useNavigation();
    const handleBackNavigate = () => {
        navigation.goBack();
    }

    const onSubmit = (data: FormData)=>{
        const cpf = data.cpf;
        navigation.navigate('UserData', { data: cpf });
        console.log(cpf)
   }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <Header onPress={handleBackNavigate}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: height / 12 }}>
                <Text
                    style={{
                        fontWeight: '600',
                        fontSize: RFValue(28),
                        width: width - 60
                    }}
                >Bem-vindo ao cadastro! Para começar, digite seu CPF.</Text>

                <Text style={{ fontSize: RFValue(12), fontWeight: '400', width: width - 60 }}>Precisamos dele para começar o seu cadastro!</Text>
                
                <View>
                <Controller
                control={control}
                name="cpf"
                rules={{
                required: 'Por favor insira um Cpf',
                pattern:{
                    message: 'Cpf inválido, insira um Cpf válido',
                    value: /^\d{11}$/
                }
                }}

                render={({ field: {value, onChange}})=>(  
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
                        placeholder='000.000.000-00'
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        onChangeText={onChange}
                    />
                    )}>
                </Controller>
                {errors.cpf &&(
                    <Text style={{ color: 'red', fontSize: RFValue(10), marginTop: 2}}>
                        {errors.cpf.message}
                    </Text>
                )}
                </View>

               <ButtonBlue name="Começar" onPress={handleSubmit(onSubmit)}/>

            </View>

        </View>
    )
}