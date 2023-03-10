import { useState } from 'react';
import { StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import PateDivision from '../components/pate/basic-data/pate.division';
export default function TabTwoScreen() {
    const checkData = () => {
        console.log('CHECK DATA');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View
                style={styles.separator}
                lightColor='#eee'
                darkColor='rgba(255,255,255,0.1)'
            />
            <View>
                <TouchableOpacity onPress={() => checkData()}>
                    <Text>Check Data</Text>
                </TouchableOpacity>
            </View>
            <PateDivision />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
