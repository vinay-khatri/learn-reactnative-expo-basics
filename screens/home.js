import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function HomeScreen({ navigation }) {
    const [number, setNumber] = useState('')

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {/* View is simillar to Div tag in HTML*/}
            <View style={styles.screenHome}>
                <View style={styles.card}>
                    <View style={styles.banner}>
                        <Text style={{ fontSize: 20 }}>Digit Counter</Text>
                        <MaterialIcons name='face' size={18} />
                    </View>
                    <TextInput style={styles.input} placeholder='Enter a Number' defaultValue={number}
                        onChangeText={(val) => setNumber(val)} keyboardType='numeric' />
                    <Button title='Calculate' onPress={() => navigation.navigate('ResultScreen', { number: number })} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    screenHome: {
        height: 600,
        backgroundColor: '#678',
    },
    card: {
        margin: 15,
        height: 200,
        backgroundColor: 'rgb(190, 190, 190)',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: 200,
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: '#777',
        alignItems: 'center',
    },
});