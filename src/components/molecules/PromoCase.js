import React from "react";
import { View,Text,StyleSheet } from "react-native";
import PromoLabel from "../atoms/PromoLabel";

const PromoCase = () => {
    return  <View style={styles.case}>
        <View style={styles.line}>
            <PromoLabel></PromoLabel>
        </View>
        <View style={styles.line} >
            <Text style={styles.txt}>Buy one get one Free</Text>
        </View>
    </View>
};
const styles = StyleSheet.create({
    case : {
        padding:10,
        width:275,
        borderRadius:10,
        backgroundColor:'#bf9d5f',
        gap:14
    },
    line : {
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    txt : {
        color:'#fff',
        fontWeight:'500',
        fontSize:25,
        width :175
    }
});

export default PromoCase;