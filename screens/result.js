import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function ResultScreen({ route, navigation }) {

    let number = route.params?.number
    let message = route.params?.message

    return (
        <View style={styles.screenResult}>
            {/* Don't use logical operator like and or or but a ternary operator with null */}
            {number ? <Text style={{ paddingTop: 200 }}> Digits : {JSON.stringify(number.length)} </Text> : null}
            {message ? <Text style={{ paddingTop: 200 }}>{JSON.stringify(message)}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    screenResult: {
        height: 600,
        backgroundColor: '#678',
        alignItems: 'center'
    }
})