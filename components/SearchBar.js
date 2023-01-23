import React from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search" 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#c1c1c1',
        height: 50,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar