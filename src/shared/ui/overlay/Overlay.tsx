import style from './Overlay.module.css';

const Overlay = ({onClose}) => {
  return <div className={style.overlay} onClick={()=>onClose()}></div>;
};

export default Overlay;
