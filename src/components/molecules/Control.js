import React from "react";
import { Text,StyleSheet ,View } from "react-native";
import SearchBar from "../atoms/SearchBar";
import OptionButton from "../atoms/OptionButton";

const Control = () => {
    return  <View style={styles.control_view}>
                <SearchBar></SearchBar>
                <OptionButton></OptionButton>
            </View>
};

const styles = StyleSheet.create({
    control_view :{
        flex:1,
        flexDirection:"row",
        gap:10
    }
});

export default Control;