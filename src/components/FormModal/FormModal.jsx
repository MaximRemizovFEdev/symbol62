import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";

const Modal = (props) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const FormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        text="сделать заказ"
        type="button"
        variant="fill"
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Это модальное окно</h2>
        <p>Здесь может быть любой контент.</p>
      </Modal>
    </>
  );
};

export default FormModal;
