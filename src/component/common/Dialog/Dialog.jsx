import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";
import './Dialog.scss'
const Dialog = ({
  isOpen,
  confirm = { text: "", onConfirm: () => {} },
  onClose,
  children,
  title,
}) => {
  if (!isOpen) return null; 
  return (
    <>
      <div className="dialog-overlay" onClick={onClose}>
        <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
          <div className="dialog-header">
            <h3>{title}</h3>
            <Button
              size="small"
              type="plain"
              onClick={onClose}
              className="close-icon-dialog"
            >
              <IoMdClose color="#000" size={"15px"} />
            </Button>
          </div>
       
          <div className="dialog-body">{children}</div>
          <div className="dialog-footer">
            <Button size="small" type="border" onClick={onClose}>
              Close
            </Button>
            {confirm.text && (
              <Button size="small" type="primary" onClick={confirm.onConfirm}>
                {confirm.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;