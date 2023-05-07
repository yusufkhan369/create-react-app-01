import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import Counter from './components/counter/Counter'



function App() {
  return (
    <div className="App">
      My ToDo applicaiton updated
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}



export default App;
