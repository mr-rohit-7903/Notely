import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <SearchBar />
            <main>{children}</main>
        </div>
    );
}

export default Layout;

