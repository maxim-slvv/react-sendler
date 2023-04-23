import style from './DropMenu.module.scss';

export const DropMenu = ({ props }) => {
  return (
    <div className={style.container}>
      <ul className={style.box}>
        {props.map((e) => (
          <li className={style.item}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
