import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
        <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
