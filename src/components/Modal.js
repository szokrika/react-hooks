import React from "react";
import { useLockBodyScroll } from "./custom/useLockBodyScroll";

export default function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <i className="modal-close" onClick={onClose}>
          x
        </i>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
