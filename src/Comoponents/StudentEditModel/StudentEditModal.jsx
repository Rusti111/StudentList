import { useState } from "react";
import Model from "../Model/Model";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./StudentEditModal.module.css";

const StudentEditModel = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: student.name,
    rollNumber: student.rollNumber,
    address: {
      street: student.address.street,
      city: student.address.city,
    },
    phoneNumber: student.phoneNumber,
    photo: student.photo,
    description: student.description,
  });            

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      id: student.id,
      ...formData,
    });
    onCancel();
  };

  return (
    <Model onCancel={onCancel} className={styles.studentEditModelContainer}>
      <div className={styles.studentEditModelContent}>
        <div className={styles.studentEditModelHeader}>
          <h2>Изменение пользователя.</h2>
          <button
            className={styles.studentEditModelCloseButton}
            onClick={onCancel}
          >
            &times;
          </button>
        </div>
        <div className={styles.studentEditModelBody}>
          <form onSubmit={handleSave} className={styles.studentEditForm}>
            <label>
              Имя:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.studentEditModelInput}
              />
            </label>
            <label>
              Номер:
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                required
                className={styles.studentEditModelInput}
              />
            </label>
            <label>
              Улица:
              <input
                type="text"
                name="street"
                value={formData.address.street}
                onChange={handleAddressChange}
                required
                className={styles.studentEditModelInput}
              />
            </label>
            <label>
              Город:
              <input
                type="text"
                name="city"
                value={formData.address.city}
                onChange={handleAddressChange}
                required
                className={styles.studentEditModelInput}
              />
            </label>
            <label>
              Номер телефона:
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={styles.studentEditModelInput}
              />
            </label>
            <label>
              Фотография:
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className={styles.studentEditModelInput}
              />
            </label>
            <div className={styles.studentEditModelFooter}>
              <button className={styles.studentEditModelSaveButton}>
                <FontAwesomeIcon icon={faUserPen} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Model>
  );
};

export default StudentEditModel;
