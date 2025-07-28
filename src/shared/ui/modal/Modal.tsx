import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import Overlay from '../overlay/Overlay';

const modalElement = document.getElementById('modal');

const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div className={style.modal}>
      <button className={style.close} onClick={()=> onClose()}>X</button>
        {children}</div>
      <Overlay onClose={onClose}/>
    </>,
    modalElement,
  );
};

export default Modal;
