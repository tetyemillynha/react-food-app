import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../src/api/yelp';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () =>{
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={searchApi} 
        />
        <Text>Search Screen</Text>
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