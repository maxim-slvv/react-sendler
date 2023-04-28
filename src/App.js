import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { NotFoundPage } from './pages/NotFoundPage';
import { useLocation } from 'react-router-dom';
import { Messages } from './pages/Dashboard/Messages';
import { Sendings } from './pages/Dashboard/Sendings';
import { Contacts } from './pages/Dashboard/Contacts';
import { Templates } from './pages/Dashboard/Templates';

import './scss/index.scss';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        {location.pathname === '/' ? (
          <>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages/" element={<Messages />} />
            <Route path="/sendings/" element={<Sendings />} />
            <Route path="/contacts/" element={<Contacts />} />
            <Route path="/templates/" element={<Templates />} />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
