import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../src/api/yelp';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) =>{
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err);
    }
  }

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