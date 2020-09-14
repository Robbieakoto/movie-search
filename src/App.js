/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from './Components/Header';
import './tailwind.css';
import SearchMovies from './Components/Search';

function App() {

  return (
      <div className="relative width-full">
        <div className="mx-auto overflow-hidden">
          <Header/>
          <SearchMovies/>
        </div>
      </div>
  );
}

export default App;
