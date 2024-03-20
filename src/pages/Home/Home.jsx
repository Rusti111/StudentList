import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.welcome}>
      <h1>Добро пожаловать.</h1>
      <h2>Здесь вы можете ознакомиться и получить информацию о студентах.</h2>
      <Link className={styles.student_link} to="/students">
        Нажмите.
      </Link>
    </div>
  );
};

export default Home;
