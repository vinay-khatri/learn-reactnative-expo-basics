import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './stacks/homeStack';
import AboutStack from './stacks/aboutStack';

export default function App() {
    const Drawer = createDrawerNavigator()

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, drawerType: 'slide' }}>
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="About" component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}