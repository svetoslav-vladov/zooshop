import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title, children }) => {
    return ReactDom.createPortal (
        (
        <div className={isOpen ? "" : "hidden"}>
            <div className={styles.overlay} />
            <div className={styles.modalContentWrapper}>
                <button>Close</button>
                {children}
            </div>
        </div>
        ), document.getElementById('portal')
    );
};

export default Modal;