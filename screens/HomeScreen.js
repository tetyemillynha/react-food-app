import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
        <Text>Home Screens</Text>
        <Button
            color="red"
            title="Search Screen"
            onPress={() => navigation.navigate('Search') }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default HomeScreen