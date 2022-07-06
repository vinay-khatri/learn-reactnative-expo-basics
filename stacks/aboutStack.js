import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from '../screens/about';

export default function AboutStack() {

    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName="AboutScreen" >
            <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'About Screen' }} />
        </Stack.Navigator>
    )
}