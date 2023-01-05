import classes from "./ProfileForm.module.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const authToken = useSelector((state) => state.auth.token);
  const newPassword = useRef();
  const history = useHistory();

  const changePasswordHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPassword.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBAJujuxy_kbq8TwZL1fNCj9clDzTfacAk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authToken,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/auth");
    });
  };
  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={newPassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
