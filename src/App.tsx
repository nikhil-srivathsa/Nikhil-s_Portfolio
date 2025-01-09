import React from 'react';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Nikhil Srivathsa A.S Portfolio</h1>
      <Experience />
      <Skills />
    </div>
  );
};

export default App;