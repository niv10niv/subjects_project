import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import App from './App';

import SubjectProvider from './components/context/SubjectProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SubjectProvider>
      <App />
    </SubjectProvider>
  </React.StrictMode>
);
