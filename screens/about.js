import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.screenAbout}>
            <Text style={{ paddingVertical: 100 }}>This is my First App with React Native</Text>
            <Button title='Go To Result Page'
                onPress={() => navigation.navigate('Home', { screen: 'ResultScreen', params: { message: 'Came from About Page' } })} />
        </View>
    )
}

const styles = StyleSheet.create({
    screenAbout: {
        height: 600,
        backgroundColor: '#678',
        alignItems: 'center'
    }
})