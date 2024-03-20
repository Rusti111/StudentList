import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../../api/api";
import Loader from "../../Comoponents/Loader/Loader";
import styles from "./UserDetails.module.css";

const StudentDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!id) {
          throw new Error("Идентификатор пользователя не указан");
        }
        const fetchedUser = await getUserById(id);
        setUser(fetchedUser);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении пользователя:", error);
        setLoading(false);
      }
    };

  
    if (id) {
      fetchUser();
    } else {
      setLoading(true); 
    }
  }, [id]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (!user) {
    return (
      <div className={styles.Container}>
        <h2>Ошибка!!!</h2>
        <p>Не удалось получить данные пользователя.</p>
        <Link to="/Students" className={styles.backButton}>
          Назад
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <h2>Данные пользователя.</h2>
      <Link to="/Students" className={styles.Button}>
        Назад
      </Link>
      <div className={styles.DetailsInfo}>
        <img src={user.photo} alt={user.name} className={styles.DetailsPhoto} />
        <p>
          <p>
            <strong>Имя пользователя:</strong> {user.Studentname}
          </p>
          <p>
            <strong>Имя:</strong> {user.name}
          </p>
          <p>
            <strong>Улица:</strong> {user.address.street}
          </p>
          <p>
            <strong>Город:</strong> {user.address.city}
          </p>
          <p>
            <strong>Телефон:</strong> {user.phoneNumber}
          </p>
          <p>
            <strong>Описание:</strong> {user.description}
          </p>
        </p>
      </div>
    </div>
  );
};

export default StudentDetails;
