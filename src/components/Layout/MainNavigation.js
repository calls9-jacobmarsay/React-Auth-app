import { Link } from "react-router-dom";
import { authActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useSelector((state) => state.auth.isLoggedIn);
  console.log(login);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.replace("/auth");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!login && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {login && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
