import React, { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Modal() {
  const [isVisibleModal, setIsVisibleModal] = useState(true);
  const modalRef = useRef();
  const showModal = () => {
    setIsVisibleModal(false);
  }

  useOutsideClick(modalRef, showModal);

  const cls = isVisibleModal ? ['modal'].join(' ') : ['modal', 'hidden'].join(' ');


  return (
    <div className={cls} ref={modalRef}>
      <h2>Modal title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis delectus dolores, eius, eveniet
        fuga fugit harum illum molestias nesciunt officiis quidem repellat unde. Deserunt expedita ipsa ipsam nostrum
        qui?</p>
    </div>
  )
}