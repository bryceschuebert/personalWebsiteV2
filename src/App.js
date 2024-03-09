import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyle from './components/styling/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainPage />
    </Router>
  );
}

export default App;

