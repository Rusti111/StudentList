import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleInfo,
  faTrashAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { AddStudentModel } from "../../Comoponents";
import StudentEditModel from "../../Comoponents/StudentEditModel/StudentEditModal";
import Loader from "../../Comoponents/Loader/Loader";
import * as userActions from "../../store/slices/UserSlice";
import styles from "./UserList.module.css";

const UserList = () => {
  const dispatch = useDispatch();
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const { users, loading, error } = useSelector((state) => state.users);
  const [searchName, setSearchName] = useState("");
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    dispatch(userActions.fetchUsers());
  }, [dispatch]);

  const filteredUsers = searchName
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchName.toLowerCase())
      )
    : users;

  const handleDeleteUser = (userId) => {
    dispatch(userActions.deleteUserById(userId));
  };

  const handleEditUser = (user) => {
    setEditedUser(user);
  };

  const handleSaveUser = (updatedUserData) => {
    dispatch(
      userActions.updateUserById({
        userId: updatedUserData.id,
        updatedUserData,
      })
    );
  };

  const handleCancelEdit = () => {
    setEditedUser(null);
  };

  return (
    <div className={styles.ListContainer}>
      <div className={styles.Container}>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search by name..."
          className={styles.Input}
        />

        <button
          className={styles.button}
          onClick={() => setShowAddUserModal(true)}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Фото.</th>
            <th>Имя.</th>
            <th>Имя пользователя.</th>
            <th>Адрес.</th>
            <th>Телефон.</th>
            <th>Действия.</th>
          </tr>
        </thead>
        <tbody>
          {loading && <></>}
          {error && (
            <tr>
              <td colSpan="6" className={styles.error}>
                Ошибка: {error}
              </td>
            </tr>
          )}
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.photo}
                  alt={user.name}
                  className={styles.Photo}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                {user.address.street}, {user.address.city}
              </td>
              <td>{user.phone}</td>
              <td className={styles.Actions}>
                {editedUser && editedUser.id === user.id ? (
                  <StudentEditModel
                    user={editedUser}
                    onSave={handleSaveUser}
                    onCancel={handleCancelEdit}
                  />
                ) : (
                  <>
                    <button
                      className={styles.button}
                      onClick={() => handleEditUser(user)}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link
                      to={`/user/${user.id}`}
                      className={`${styles.button} ${styles.buttonLink}`}
                    >
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </Link>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {loading && <Loader />}

      {showAddUserModal && (
        <AddStudentModel onClose={() => setShowAddUserModal(false)} />
      )}
    </div>
  );
};

export default UserList;
