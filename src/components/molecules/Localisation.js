import React from "react";
import { Text,StyleSheet ,View } from "react-native";

const Localisation = () => {
    return <View>
                <Text style={styles.text_cl}>Localisation</Text>
                <Text style={styles.text_title}>Selected Locatisation</Text>
            </View>
};

const styles = StyleSheet.create({
    text_title : {
        color:'#fff',
        fontSize : 18
    },
    text_cl : {
        color:'#555555',
        fontSize : 16,
    },
});

export default Localisation;