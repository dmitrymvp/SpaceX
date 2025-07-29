import style from './Overlay.module.css';

type OverlayProps = {
  onClose: () => void;
};

const Overlay = ({ onClose }: OverlayProps) => {
  return <div className={style.overlay} onClick={onClose}></div>;
};

export default Overlay;
