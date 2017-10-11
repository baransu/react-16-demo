import React from 'react';
import { createPortal } from 'react-dom';

const Modal = props => {
  if (!props.visible) return null;
  return createPortal(
    <div
      style={{
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255,255, 0.6'
      }}
    >
      <div
        style={{
          padding: '30px',
          boxShadow:
            '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
          borderRadius: '8px',
          backgroundColor: '#fff',
          width: '50vw',
          height: '50vh'
        }}
      >
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
