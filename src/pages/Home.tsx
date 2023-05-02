import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      тут будет главная
      <br />
      <br />
      <Link to={'/dashboard'}>
        <strong>Перейти в личный кабинет ^</strong>
      </Link>
    </div>
  );
};
export default Home;
