import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)} 
        />
        { errorMessage ? 
          <Text> {errorMessage} </Text> 
        : null }
        <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    // view: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});

export default SearchScreen