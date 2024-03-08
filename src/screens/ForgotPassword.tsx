import { View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat";

import Header from "../components/Header";

const {height, width} = Dimensions.get("screen");

type Data = {
    email: string;
}


export default function ForgotPassword({email}: Data){

    const navigation = useNavigation();

    const handleEmailForgotPassword = ()=>{
        firebase.auth().verifyPasswordResetCode
    }


    return(
        <View>
            <Header/>

            <View style={{}}>
                <Text></Text>

            </View>

        </View>
    )
}