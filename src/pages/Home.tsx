import React from 'react';
import { Link } from 'react-router-dom';

import mixitup from 'mixitup';

const Home = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    var mixer = mixitup('.container', {
      selectors: {
        target: '.mix',
      },
      animation: {
        duration: 100,
        effectsOut: 'fade translateY(-100%)',
      },
    });
    //начальное значение
    mixer.filter('.mix');
  }, [containerRef]);

  return (
    <div>
      тут будет главная
      <br />
      <br />
      <Link to={'/dashboard'}>
        <strong>Перейти в личный кабинет ^</strong>
      </Link>
      <div ref={containerRef} className="container">
        <div className="mix category-a" data-order="1">
          111111111111111
        </div>
        <div className="mix category-b" data-order="2">
          222222222222222
        </div>
        <div className="mix category-b category-c" data-order="3">
          333333333333333
        </div>
        <div className="mix category-a category-d" data-order="4">
          444444444444444
        </div>
      </div>
      <button type="button" data-filter="all">
        All
      </button>
      <button type="button" data-filter=".category-a">
        Category A
      </button>
      <button type="button" data-filter=".category-b">
        Category B
      </button>
      <button type="button" data-filter=".category-c">
        Category C
      </button>
      <button type="button" data-sort="order:asc">
        Ascending
      </button>
      <button type="button" data-sort="order:descending">
        Descending
      </button>
      <button type="button" data-sort="random">
        Random
      </button>
    </div>
  );
};
export default Home;
