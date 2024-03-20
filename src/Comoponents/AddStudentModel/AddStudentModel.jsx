// AddStudentModel.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Model from "../Model/Model";
import { addUser } from "../../store/slices/UserSlice"; 
import styles from "./AddStudentModel.module.css";

const AddStudentModel = ({ onClose }) => {
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    const defaultPhoto =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREhgSEhEYGBgZGBgYGBgYGBgYGBgYGBgaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMDw8PEQ8PGjEdJB0xMTQxMTExNDExMTE0NDE0MTExMTE0MTExMTExMTExNDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGAwj/xABFEAACAQIDBAcECAMHAgcAAAABAgADEQQSIQUxQVEGBxMiYXGBMlKRoRQjQmJygpLBorHwM0Njc7LC0SSjFVNkg8Ph4v/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCVYiICIiAiIgIiICIiAiJzHTbpfS2ZSGges4PZ07/xvyQH1J0HEgMvpT0ow2zafaVmu7XyUltnc+HurzY6DxNhIK6T9K8VtF71nyoDdKSEhE5Ej7TfePpbdNZtPaVbF1WrV3Lu29jy4Ko3Ko4ATFgWtuPlNr0nYHG4jL7Iquq+CqcoUDgFACgcAAJqyLi02fSBy9c1Ta9ZKVY2tYs9NTUsBoO/nHpA1supU2dgiKWZjYKoJJPIAb5bJQ6rtjqtFsW6gtUZlQnXKimzW5EsDfwUQNHsXoBiKhU1rIDrk32B+07Dd+EatYagXZdr0T6OYfEYt6i0/+mwzGnSDC5rVQe9UqH7QFr23aqNLESRqzgK3dJsrE2HhNT0LwxTAUdDmdO0Y21LVDmY/FoG8iUlyqTAtIkH9P9m/Rse9hZKlqq8u/cOP1hj6iTk9NuFvW4+cjnrbwgNGjWtqlRkPk6ltfVPnAj/bWrUm9/DYcnzWmKf+wTXzYbZIzUkAtkw2HHmXprVJ+NQj0mvgemGxD0nWpTdkdTdXQlWU8wRJf6EdZS1yuGx5VKhsEr6KjngHG5HPP2T4aXhuDA+sJSQ11ddYDUCuDxrk0jZaVVjrSO4I54pyY+zx7vszLAREQERECsSkQEREBES13VFLMQFAJYk2AAFySeVoGp6U9IKWzsM1ep3m9mml7F3I7q+A4k8ADPnXau0quLrPiK75nc3J4AcFUcFA0Am26cdJm2lizUBIpU7pRXXRL6sR7zWBPhYcJzsBERApNniiamFpPxps9BtfsH62l82rjyQTWzueiuxqWJwJQ0871Kxuc+QoadN8hU";

    const newStudent = {
      studentName: studentName,
      address: {
        name: name,
        street: street,
        city: city,
      },
      phone: phone,
      description: description,
      photo: photo ? photo : defaultPhoto,
    };

    dispatch(addUser(newStudent)); 

    onClose();
  };

  return (
    <Model onClose={onClose}>
      <div className={styles.formContainer}>
        <form onSubmit={handleAddStudent}>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faUserPlus} />
            Add Student
          </button>
        </form>
      </div>
    </Model>
  );
};

export default AddStudentModel;
