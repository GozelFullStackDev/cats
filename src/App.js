import React from 'react';

import Button from './shared/Button'; // Importing Button component
import Input from './shared/Input'; // Importing Input component

import Header from './shared/Header'; // Importing Header component
import UpButton from './shared/UpButton'; // Importing UpButton component

function App() {
  return (
    <div className="App">
      <Header title="My App" />
    
        <Button onClick={() => alert('Button clicked')} label="Click me!" />
        <Input value="" onChange={(value) => console.log(value)} />

      <UpButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

export default App;