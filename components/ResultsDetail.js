import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.view}>
      <Image 
        style={styles.image}
        source={{uri: result.image_url}}
      />
      <Text style={styles.title}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        marginLeft: 10,
        marginBottom: 20
    },
    image: {
      width: 250,
      height: 120,
      borderRadius: 4
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16
    }
});

export default ResultsDetail