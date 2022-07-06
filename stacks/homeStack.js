import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import ResultScreen from '../screens/result';
import { Button } from 'react-native';

// import { getHeaderTitle } from '@react-navigation/elements';

export default function HomeStack({ navigation }) {

    const Stack = createNativeStackNavigator()

    const leftButton = (options) => (
        options.canGoBack ?
            <Button title="-" onPress={navigation.goBack} /> :
            <Button title="o" onPress={navigation.toggleDrawer} />
    )

    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerLeft: leftButton }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home Screen' }} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Result Screen' }} />
        </Stack.Navigator>
    )
}
