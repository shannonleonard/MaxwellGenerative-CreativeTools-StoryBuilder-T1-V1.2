import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount the App component into the "root" div in index.html
ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
    if (!root) {
        console.error("No root element found!");
        return;
    }
    console.log("App is initializing...");
    root.innerHTML = "<h1>Welcome to v1.2!</h1><p>Your app should render here.</p>";
}); 