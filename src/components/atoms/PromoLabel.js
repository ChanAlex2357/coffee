import React from "react";
import { View , Text , StyleSheet } from "react-native";

const PromoLabel = () => {
    return  <Text style={styles.promo}>Promo</Text>
};
const styles = StyleSheet.create({
    promo : {
        backgroundColor:'#e85c2b',
        paddingHorizontal:10,
        paddingVertical:2,
        color : '#fff',
        fontWeight:"500",
        borderRadius:5
    },
});
export default PromoLabel;