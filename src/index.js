import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_KEY from '../config';


//create a new component that will produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//take this component html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));