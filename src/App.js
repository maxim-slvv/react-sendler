import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';

import './scss/index.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        {/* вынес ниже что бы исключить футеры и хэдеры */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
