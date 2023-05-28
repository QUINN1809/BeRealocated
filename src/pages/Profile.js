import React from "react";
import styles from "./Profile.module.css";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
const Explore = () => {
  const signin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
      }).catch(alert);
  }
  const logout = () => {
    auth.signOut();
    signOut(auth).then(() => {

    }).catch((error) => {
    });
  }

  return (
    <div className={styles.profile}>
      <center>
        <button className={styles.top} onClick={signin}>Sign In with Google</button>
      </center>
      <button className={styles.bottom} onClick={logout}>
        Logout
      </button>
    </div>
  )
};
export default Explore;