import React from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Problem from './components/Problem';
import Solution from './components/Solution'
import Validation from './components/Validation';
import Me from './components/Me';


function App() {
  return (
    <ThemeProvider 
      theme={{
        colors: {
          background: '#00000',
          primary: '#00ffff',
          secondary: '#ffea41'
        },
        space: [ 0, 6, 12, 24, 48 ],
        fontSizes: [ 14, 16, 18, 20, 24 ],
        radii: {
          default: 30,
        },
        variants: {
          card: {
            p: 4,
            bg: 'background',
            boxShadow: 'card',
            borderRadius: 4,
          },
          nav: {
            p: 3,
            color: '#000000',
            textDecorationColor: '#ffea41',
          }
        }
      }}
      >
      <div className="App">
        <NavBar />
        <Intro />
        <Problem />
        <Solution />
        <Validation />
        <Me />
      </div>
    </ThemeProvider>
  );
}

export default App;
