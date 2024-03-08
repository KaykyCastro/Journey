import { View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { RFValue } from 'react-native-responsive-fontsize'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

import ButtonBlue from '../components/ButtonBlue';
import TextApresentation from '../components/auth/TextApresentation';
import TextMessageSecurity from '../components/auth/TextMessageSecurity';

type FormData = {
    email: string
    name: string;
}


export default function Form() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    useEffect(() => console.log('Email erros', errors?.email), [errors?.email]);

    const navigation = useNavigation()
    const onSubmit = (data: FormData) => {
        navigation.navigate('ConfirmPassword', { data: data });
    }

    const handleGoToRegisterPersonal = ()=>{
        navigation.navigate('registerPersonal');
    }


    return (
        <View style={{ flex:1, alignItems: 'center', backgroundColor: "white" }}>
           
           <TextApresentation/>

            <View>
                <Controller
                    control={control}
                    name='email'
                    rules={{
                        required: 'Por favor insira um email',
                        pattern: {
                            message: 'Insira um email válido',
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        }
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
                                marginBottom: height/36,
                                backgroundColor: '#F2F2F2'
                            }}
                            placeholder='Insira seu email'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={onChange}
                        />
                    )} />
                {errors.email?
                    <Text style={{ color: 'red', position: 'absolute', fontSize: RFValue(10), marginTop: 58}}>
                        {errors.email.message}
                    </Text> : <Text style={{color: 'gray', position: 'absolute', fontSize: RFValue(10), marginTop: 58}}>Ex: jhon@gmail.com</Text>
                }
            </View>

            <ButtonBlue name="Enter" onPress={handleSubmit(onSubmit)} />

            <View
        style={{
        flex: 1,
        marginTop: height/12,
        alignItems: 'center'
        }}
        >

            <View
            style={{
                alignItems: 'center'
            }}
            >
                <TouchableOpacity>
                     <Text
                     style={{
                        fontWeight: '400',
                        fontSize: RFValue(10),  
                     }}
                     onPress={handleGoToRegisterPersonal}
                     >
                    Não tem conta? <Text style={{color: '#007AFF', fontWeight: '600'}}>Crie a sua apertando aqui!</Text>
                </Text>
                </TouchableOpacity>
            </View>  
            
            <TextMessageSecurity/>
        </View>
        </View>
    )
}