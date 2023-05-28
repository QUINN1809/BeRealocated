import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";

const GetUser = () => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    return user;
  } else {
    return null;
  }
});
}
export default GetUser
