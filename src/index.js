import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>
  , document.getElementById('root')
);