import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <header className={styles.Header}>
        <Link to="/" className={styles.Link}>
          <FontAwesomeIcon icon={faHouseChimney} />
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Main;
