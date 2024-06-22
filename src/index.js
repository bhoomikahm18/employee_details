import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "http://localhost:5000/api"; //Instead of using full URL in each request, we can managed here.
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
