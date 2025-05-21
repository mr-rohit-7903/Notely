import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="search-bar">
            
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
                type="text"
                placeholder="Search for notes..."
                value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
        </div>

    );
}

export default SearchBar;
