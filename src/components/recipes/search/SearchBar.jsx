import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './searchBar.scss'; // Assurez-vous de créer et importer les styles pour ce composant

function SearchBar() {
  const [query, setQuery] = useState(''); // Déclaration de l'état query
  const [suggestions, setSuggestions] = useState([]); // Déclaration de l'état suggestions

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 0) {
        try {
          const response = await axios.get(`http://localhost:5000/search?q=${query}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = () => {
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion._id} onClick={handleSuggestionClick}>
              <Link to={`/recipe/${suggestion._id}`}>{suggestion.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;