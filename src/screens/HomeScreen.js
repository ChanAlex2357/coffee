// Imporation des modules react
import React from "react";
import { View, StyleSheet, } from 'react-native';

const HomeScreen = function() {
    return  <View style={styles.screen_container}> 
                <View style={styles.head_view}>

                </View>
                <View style={styles.body_view}>
                    
                </View>
            </View>
}

const styles = StyleSheet.create({
    screen_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    head_view : {
        flex : 1,
        backgroundColor : '#020202',
        padding:6,
    },
    body_view : {
        flex:2,
        backgroundColor : "#bbbbbb",
    }
});
// Exporation du composant
export default HomeScreen;