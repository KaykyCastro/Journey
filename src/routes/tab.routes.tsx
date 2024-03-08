import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect, useRef } from "react";
import { TransitionPresets } from '@react-navigation/stack';
import { Animated } from 'react-native';

import Init from "../screens/Init";
import AuthScreen from "../screens/AuthScreen";
import Password from "../screens/Password"
import RegisterPersonal from "../components/register/RegisterPersonal";
import UserData from "../components/register/UserData";
import ForgotPassword from "../screens/ForgotPassword";
import { FadeIn } from "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function TabRoutes() {

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,

            }}

        >

            <Stack.Screen
                name="Init"
                component={Init}
                options={{ tabBarStyle: { display: 'none' } }}
            ></Stack.Screen>

            <Stack.Screen name="Auth" component={AuthScreen} options={{ tabBarStyle: { display: 'none' } }}
            >
            </Stack.Screen>

            <Stack.Screen
                name="ConfirmPassword"
                component={Password}
                options={{ tabBarStyle: { display: 'none' } }}
            >
            </Stack.Screen>

            <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            ></Stack.Screen>

            <Stack.Screen
                name="registerPersonal"
                component={RegisterPersonal}
                options={{
                    tabBarStyle: { display: 'none' },
                }}>
            </Stack.Screen>

            <Stack.Screen
                name="UserData"
                component={UserData}
                options={{ tabBarStyle: { display: 'none' } }}
            >
            </Stack.Screen>

        </Stack.Navigator>
    )
}