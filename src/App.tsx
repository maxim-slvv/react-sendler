import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

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
  ImportContacts,
} from './pages/index';

import './scss/index.scss';

function App() {
  const location = useLocation();

  const isLoggedIn = useSelector((state: RootState) => !!state.auth.authData.accessToken);
  React.useEffect(() => {
    if (isLoggedIn) {
      alert('вы успешно авторизованы');
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Routes>
        {location.pathname === '/' ? (
          <Route index element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home />} />
        ) : (
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/sendings" element={<Sendings />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/new-email" element={<NewEmailSendings />} />
            <Route path="/new-whatsapp" element={<NewWASendings />} />
            <Route path="/import" element={<ImportContacts />} />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
