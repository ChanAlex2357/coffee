import React from "react";
import { Text,StyleSheet ,View } from "react-native";

const Localisation = () => {
    return <View>
                <Text style={styles.text_title}>Localisation</Text>
                <Text style={styles.text_cl}>Selected Locatisation</Text>
            </View>
};

const styles = StyleSheet.create({
    text_title : {
        color:'#fff',
        fontSize : 18
    },
    text_cl : {
        color:'#fff',
        fontSize : 16,
    },
});

export default Localisation;