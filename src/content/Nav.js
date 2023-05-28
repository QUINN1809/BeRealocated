import { Outlet, Link } from "react-router-dom";
import styles from "./Nav.module.css"
import { getDownloadURL, ref } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import storage from '../firebase_setup/firebase';
const user = getAuth().currentUser;
const date = new Date();
const Nav = () => {
    if (user !== null) {
        getDownloadURL(ref(storage, `gs://berealocated-58df8.appspot.com/files/${user.email}/${date.getMonth()}${date.getDate()}.png`))
            .then((url) => {
                var img = document.getElementById('profile');
                img.setAttribute('src', url);
                img.setAttribute('className', "image-style");
            })
            .catch((error) => { });
    }
    return (
        <div>
            <div className={styles.logo}></div>
            <Link className={styles.profiledge} to="profile"><div className={styles.profile}><img></img></div></Link>

            <div className={styles.navbar}>

                <Link className={styles.navitem} to="Explore">Explore
                </Link>
                <Link className={styles.navitem} to="/">My Task
                </Link>
            </div>
            <Outlet />
        </div>

    )
};
export default Nav;