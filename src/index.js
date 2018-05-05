import React from 'react';
import ReactDOM from 'react-dom';

//create a new component that will produce some HTML
const App = () => {
    return <div>Hello World!</div>;
}

//take this component html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));