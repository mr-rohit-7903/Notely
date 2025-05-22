import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import SearchBar from './SearchBar';

function Layout({ children }) {
    return (
        <div className="layout">
            <div className="desktop-header">
                <Header />
            </div>
            <div className="mobile-header">
                <MobileHeader />
            </div>
            <SearchBar />
            <main>{children}</main>
        </div>
    );
}

export default Layout;

