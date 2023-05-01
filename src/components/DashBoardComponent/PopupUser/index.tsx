import style from './PopupUser.module.scss';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const PopupUser = () => {
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
          <div className={style.plus} style={{ background: 'green' }}>
            <p>S</p>
          </div>
          <span>super-mail@gmail.com</span>
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}>
            <svg width="15" height="15" viewBox="0 0 15 10">
              <path d="M2.613 4.553a.333.333 0 00-.473 0l-.707.707a.32.32 0 000 .467l6.127 6.126a.5.5 0 00.353.147h.174a.5.5 0 00.353-.147l6.127-6.126a.32.32 0 000-.467l-.707-.707a.333.333 0 00-.473 0L8 9.94 2.613 4.553z" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          className={style.ul}
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
            <Link to={'#'}>Coming soon</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to={'#'}>Coming soon</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to={'#'}>Coming soon</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to={'#'}>Coming soon</Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};
