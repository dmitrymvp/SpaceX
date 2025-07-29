import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import Overlay from '../overlay/Overlay';
import type { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const modalElement = document.getElementById('modal');

if (!modalElement) {
  throw new Error('modalElement не найден');
}

const Modal = ({ children, onClose }: ModalProps) => {
  return createPortal(
    <>
      <div className={style.modal}>
        <button className={style.close} onClick={() => onClose()}>
          +
        </button>
        {children}
      </div>
      <Overlay onClose={onClose} />
    </>,
    modalElement,
  );
};

export default Modal;
