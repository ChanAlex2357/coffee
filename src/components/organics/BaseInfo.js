import React from "react";
import { Text,StyleSheet ,View } from "react-native";
import Localisation from "../molecules/Localisation";
import Control from "../molecules/Control";

const BaseInfo = () => {
    return <View style={styles.base_view} >
        <Localisation></Localisation>
        <Control></Control>
    </View>
};

const styles = StyleSheet.create({
    base_view :{
        gap:10
    }
});

export default BaseInfo;