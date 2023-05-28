import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase_setup/firebase";
const SignUp = (email, password) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user;
    // ...
  })
  .catch((error) => {
    // ..
  });

}
export default SignUp;