import React from "react";
import PropTypes from "prop-types";
import { useKey } from "../../hook/use-key";
import "./modal.css"

export function Modal({ open, onClose, children, title }) {

  useKey("Escape", () => {
    console.log("Event:");
    
    onClose();
  });

  return (
    <div
      className={`modal fade bd-example-modal-xl show ${open && "show"}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      style={{ display: open && "block" }}
      aria-modal="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title h4" id="myExtraLargeModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  onClose: PropTypes.func,

};