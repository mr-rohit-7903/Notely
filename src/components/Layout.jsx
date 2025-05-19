import React from 'react';
import Header from './Header';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />

            {/* Editor Area */}
            <main className="main">
                {children}
            </main>
        </div>
    );
}

export default Layout;

