import { View, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { auth } from "../services/firebaseConfig";
import { Eye, EyeClosed } from "phosphor-react-native";

//Config
const { width, height } = Dimensions.get('screen');

type FormData = {
    password: string
}

export default function Password({ route }) {

    const [showPassword, setShowPassword] = useState(false);

    const { handleSubmit, control, formState: { errors } } = useForm();
    useEffect(() => console.log('Email erros', errors?.password), [errors?.password]);

    const navigation = useNavigation();
    const { email } = route.params?.data;

    const handleBackNavigate = () => {
        navigation.navigate('Auth');
    }

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSubmit = (data: { password: string }) => {
        const { password } = data;
        auth.signInWithEmailAndPassword(email, password).
            then(console.log('deu certo')).
            catch((errors) => { console.log('deu erro', errors) })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }




    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
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
                    onPress={handleBackNavigate}
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

            <View
                style={{
                    alignItems: 'center',
                    marginTop: height / 8
                }}>

                <Text
                    style={{
                        fontSize: RFValue(24),
                        fontWeight: '500'
                    }}
                >
                    Insira a sua senha
                </Text>

                <Text
                    style={{
                        fontWeight: '400',
                        textAlign: 'center',
                        fontSize: RFValue(10),
                        width: width - 40
                    }}
                >
                    Agora você precisa inserir sua senha para prosseguir com o acesso!
                </Text>
                <View>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: height / 28
                        }}
                    >

                        <Controller
                            control={control}
                            name='password'
                            rules={{ required: 'Password are mandatory' }}
                            render={({ field: { value, onChange } }) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <TextInput
                                        style={{
                                            fontWeight: '500',
                                            fontSize: RFValue(10),
                                            width: width - 110,
                                            height: height / 15,
                                            padding: 8,
                                            borderTopLeftRadius: 12,
                                            borderBottomLeftRadius: 12,
                                            backgroundColor: '#F2F2F2'
                                        }}
                                        placeholder="Insira sua senha"
                                        secureTextEntry={showPassword}
                                        onChangeText={onChange}
                                    />

                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: width - 350,
                                            height: height / 15,
                                            padding: 8,
                                            borderTopRightRadius: 12,
                                            borderBottomRightRadius: 12,
                                            backgroundColor: '#F2F2F2'
                                        }}
                                    >
                                        <TouchableOpacity style={{ padding: 'auto' }} onPress={handleShowPassword}>{showPassword ? <EyeClosed /> : <Eye />}</TouchableOpacity>
                                    </View>

                                </View>
                            )}
                        />


                    </View>
                    {errors.password && (
                        <Text style={{ color: 'red', fontSize: RFValue(10), marginTop: 2 }}>
                            {errors.password.message}
                        </Text>
                    )}
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
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: '500',
                                    fontSize: RFValue(10)
                                }}
                            >Enter</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    onPress={handleForgotPassword}
                    >
                        <Text
                            style={{
                                color: '#FF3F3F',
                                fontWeight: '600',
                                fontSize: RFValue(10),
                                marginTop: height / 32
                            }}
                        >Esqueci a senha!
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}