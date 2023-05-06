import React from 'react';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import info from '../../../assets/img/header/info.svg';
import style from './PopupMobileInfo.module.scss';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const PopupMobileInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={style.popup}>
      <motion.nav
        ref={menuRef}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={style.menu}>
        <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
          <img src={info} alt="" />
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
          <motion.li variants={itemVariants}>
            <span>Для удобства - используйте компьютерную версию приложения</span>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};
