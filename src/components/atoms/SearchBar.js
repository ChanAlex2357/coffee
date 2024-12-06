import React from "react";
import { StyleSheet , TextInput} from "react-native";

const SearchBar = () => {
    return  <TextInput
                style={styles.coffee_input}
                placeholder="Rechercher"
                placeholderTextColor={'#222222'}
                cursorColor={'#fff'}
            ></TextInput>
};

const styles = StyleSheet.create({
    coffee_input : {
        fontSize : 16,
        borderColor: '#b1e5f2',
        borderWidth: 3,
        borderRadius:5,
        padding:10
    },
});

export default SearchBar;