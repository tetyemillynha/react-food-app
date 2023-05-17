import { useEffect, useState } from "react";
import yelp from "../src/api/yelp";


export default () => {
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

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        })
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, filterResultsByPrice, results, errorMessage];
}