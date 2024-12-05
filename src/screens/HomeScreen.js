// Imporation des modules react
import React from "react";
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CoffeeButton from "../components/atoms/CoffeeButton";

const HomeScreen = function() {
    return  <View style={{flex:1}}>
                <View style={styles.head_view}>

                </View>
                <View style={styles.body_view}>
                    
                </View>
            </View>
}

const styles = StyleSheet.create({
    head_view : {
        flex : 1,
        backgroundColor : '#020202',
        padding:6,
    },
    body_view : {
        flex:2,
        backgroundColor : "#ffffff",
    }
});
// Exporation du composant
export default HomeScreen;