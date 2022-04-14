import React from 'react'
import SearchPhotos from './searchPhotos';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="container">
        <h1 className="title">Unsplash</h1>
        <SearchPhotos/>
      </div>
    </div>
    </>
  );
}

export default App;
