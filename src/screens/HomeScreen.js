// Imporation des modules react
import React from "react";
import { View, StyleSheet, } from 'react-native';
import BaseInfo from "../components/organics/BaseInfo";
import PromoCase from "../components/molecules/PromoCase";

const HomeScreen = function() {
    return  <View style={styles.screen_container}> 
                <View style={styles.head_view}>
                    <BaseInfo></BaseInfo>
                </View>
                <View style={styles.mid_view}>
                    <PromoCase></PromoCase>
                </View>
                <View style={styles.body_view}>
                </View>
            </View>
}

const styles = StyleSheet.create({
    mid_view : {
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : '#020202',

    },
    screen_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    head_view : {
        flex : 1,
        backgroundColor : '#020202',
        padding:18,
    },
    body_view : {
        flex:2,
        backgroundColor : "#bbbbbb",
    }
});
// Exporation du composant
export default HomeScreen;