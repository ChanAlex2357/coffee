import React from "react";
import { Button, StyleSheet } from "react-native";

const OptionButton = () => {
    return <Button 
        style={styles.coffee_btn} 
        title="option"
    ></Button>
};

const styles = StyleSheet.create({
    coffee_btn :{
        backgroundColor:"#bf9d5f",
    }
});

export default OptionButton;