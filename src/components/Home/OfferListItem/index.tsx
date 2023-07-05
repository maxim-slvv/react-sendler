import React from 'react';

import style from './OfferListItem.module.scss';

import img1 from '../../../assets/img/home/offer/list1.svg';
import img2 from '../../../assets/img/home/offer/list2.svg';
import img3 from '../../../assets/img/home/offer/list3.svg';
import img4 from '../../../assets/img/home/offer/list4.svg';
import star from '../../../assets/img/home/offer/star.svg';

interface ButtonProps {
  h1: string;
  p: string;
  img: number;
}

export const OfferListItem: React.FC<ButtonProps> = (props) => {
  return (
    <div
      className={style.listItem}
      // style={{}}
    >
      <img className={style.star} src={star} alt="" />
      <div className={style.text}>
        <h1>{props.h1}</h1>
        <p> {props.p}</p>
      </div>
      <div className={style.picture}>
        <img
          src={props.img === 1 ? img1 : props.img === 2 ? img2 : props.img === 3 ? img3 : img4}
          alt=""
        />
      </div>
    </div>
  );
};
