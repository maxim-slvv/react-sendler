import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  Messages,
  Sendings,
  Contacts,
  Templates,
  NotFoundPage,
  NewEmailSendings,
  NewWASendings,
} from './pages/index';

import './scss/index.scss';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        {location.pathname === '/' ? (
          <Route index element={<Home />} />
        ) : (
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/sendings" element={<Sendings />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/new-email" element={<NewEmailSendings />} />
            <Route path="/new-whatsapp" element={<NewWASendings />} />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
