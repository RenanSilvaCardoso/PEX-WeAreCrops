import React from 'react';
import Header from "./components/Header.jsx";

function NotFound() {
    return (
        <div>
            <Header />
            <h2>404</h2>
            <p>Página não encontrada.</p>
        </div>
    );
}

export default NotFound;