import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InputForm from './containers/InputForm';

import './App.css';

function App() {
  return (
    <div className="tc">
      <Header />
      <InputForm />
      <Footer />
    </div>
  );
}

export default App;
