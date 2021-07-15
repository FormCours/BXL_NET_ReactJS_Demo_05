import './App.css';
import Horloge from './components/horloge/horloge';
import HideItem from './components/hide-item/hide-item';
import SearchBar from './components/search-bar/search-bar';
import { useState } from 'react';
import Weather from './components/weather/weather';

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

function App() {
  const [city, setCity] = useState('');

  return (
    <div className="App">
      <HideItem>
        {/* Contenu => envoyer au composant via la props.children */}
        <Horloge />
      </HideItem>

      <h2>Demo API</h2>
      <SearchBar onSearch={c => setCity(c)} />
      {!!city && (
        <Weather city={city} />
      )}
    </div>
  );
}

export default App;
