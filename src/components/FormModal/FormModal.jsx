import React, { useState } from "react";
import { Modal, Button as Btn, Accordion, Form } from "react-bootstrap";
import styles from "./styles.module.css";
import Button from "../Button/Button";

const ModalBase = (props) => {
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

const dataForm = [
  {
    name: "Текстиль",
    values: [
      "Футболки",
      "Свитшоты",
      "Худи",
      "Рубашки-поло",
      "Бейсболки",
      "Панамы",
      "Носки",
      "Банданы",
      "Джерси с полной запечаткой и индивидуальным пошивом",
      "Бомбер",
      "Шоппер",
      "Другое",
    ],
  },
  {
    name: "Полиграфия",
    values: [
      "Грамоты, дипломы, сертификаты",
      "Карманные календари",
      "Открытки",
      "Бейджи",
      "Блокноты",
    ],
  },
  {
    name: "Широкоформатная продукция",
    values: [
      "Баннеры",
      "Джокерная конструкция",
      "Конструкция из бруса",
      "Ролапы",
      "Пауки",
      "Монтаж",
      "Виндеры",
      "Флаги",
    ],
  },
  {
    name: "Наклейки",
    values: ["Стикерпаки", "Отдельные наклейки", "Объемные наклейки"],
  },
  {
    name: "Сувенирная продукция",
    values: [
      "Силиконовые браслеты",
      "Бутылки",
      "Термокружки",
      "Ежедневники",
      "Термосы",
      "Ручки, карандаши",
      "Повербанки",
      "Флешки",
      "Значки",
      "Кружки",
      "Пакеты подарочные",
      "Пакеты ПВД",
      "Обложки для документов",
      "Брелки",
    ],
  },
];
const FormModal = () => {
  const options = dataForm;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState([]);
  const [step, setStep] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setResult([]);
    setStep(1);
  };

  const handleRadioChange = (name, value) => {
    setResult((prev) => [
      ...prev.filter((item) => !item.startsWith(name)),
      `${name} + ${value}`,
    ]);
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleInputChange = (e, key) => {
    setQuantities({ ...quantities, [key]: e.target.value });
  };

  const handleSubmit = () => {
    setStep(3);

    // console.log(
    //   result.map(
    //     (item) => `${item} - ${quantities[item] ? quantities[item] : "0"}`
    //   )
    // );
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = () => {
    console.log("Final Data:", {
      result,
      quantities,
      ...formData,
    });
    closeModal(); // Закрыть модальное окно после отправки
  };

  return (
    <>
      <Button
        text="сделать заказ"
        type="button"
        variant="fill"
        onClick={openModal}
      />
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton className={styles.bgColor}>
          <Modal.Title>Ваш заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.bgColor}>
          {step === 1 && (
            <Accordion defaultActiveKey="0">
              {options.map((option, idx) => (
                <Accordion.Item eventKey={idx} key={idx}>
                  <Accordion.Header>{option.name}</Accordion.Header>
                  <Accordion.Body>
                    {option.values.map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        label={value}
                        name={option.name}
                        value={value}
                        onChange={() => handleRadioChange(option.name, value)}
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}

          {step === 2 && (
            <>
              {result.map((item) => (
                <Form.Group
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px"
                  }}
                >
                  <Form.Label style={{ marginRight: "10px" }}>
                    {item}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={quantities[item] || 0}
                    onChange={(e) => handleInputChange(e, item)}
                    style={{ width: "80px" }}
                    min="0"
                  />
                </Form.Group>
              ))}
            </>
          )}

          {step === 3 && (
            <>
              <Form.Group>
                <Form.Label>Введите имя</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Сообщение</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={styles.bgColor}>
          {step === 1 && (
            <Btn
              variant="primary"
              onClick={handleNext}
              disabled={!result.length}
            >
              Далее
            </Btn>
          )}
          {step === 2 && (
            <Btn
              variant="success"
              onClick={handleSubmit}
              disabled={!result.length}
            >
              Сделать заявку
            </Btn>
          )}
          {step === 3 && (
            <Btn
              variant="success"
              onClick={handleFinalSubmit}
              disabled={!formData.email}
            >
              Отправить
            </Btn>
          )}
          <Btn variant="secondary" onClick={closeModal}>
            Закрыть
          </Btn>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
