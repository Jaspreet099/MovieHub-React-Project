import { useEffect } from 'react';

//4f239a68

const API_URL = 'http://www.omdbapi.com?apikey=4f239a68'
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(()=> {
        searchMovies('Superman')
    }, []);
    return(
        <h1>This is app</h1>
    )
}

export default App;