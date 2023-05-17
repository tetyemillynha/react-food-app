import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = (props) => {
  const [term, setTerm] = useState('');
  const [searchApi, filterResultsByPrice, results, errorMessage] = useResults();

  return (
    <View style={styles.view}>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
          results={results.length}
        />
        { errorMessage ? 
          <Text> {errorMessage} </Text> 
        : null }
        <ScrollView>
          <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Coast Effective"
          />
          <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer"/>
          <ResultsList results={filterResultsByPrice('$$$')} title="Big Speender"/>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});

export default SearchScreen