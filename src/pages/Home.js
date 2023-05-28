import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./Home.module.css";
import storage from "../firebase_setup/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import locations from "../content/locations";

const Home = () => {
  var today = new Date();
  const auth = getAuth();
  var uid = ''
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.email;
    } 
  });
    const [percent, setPercent] = useState(0);
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type:mime});
      }
    const handleUpload = () => {
      const file = dataURLtoFile(img, String(today.getMonth()) + String(today.getDate()) + '.png')
      
      if (!file) {
          alert("Please upload an image first!");
      }
      const storageRef = ref(storage, `/files/${uid}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
          "state_changed",
          (snapshot) => {
              const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setPercent(percent);
          },
          (err) => console.log(err),
          () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                  console.log(url);
              });
          }
      );
  };
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);
  return (
    <div className={styles.container}>
      {img === null ? (
        <>
          <Webcam
            className={styles.camera}
            audio={false}
            mirrored={true}
            height={500}
            width={500}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <div className={styles.outercircle}>
          <button className={styles.capture} onClick={capture}></button></div>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button className={styles.retake} onClick={() => setImg(null)}>&#10006;</button>
          <button className={styles.send} onClick={handleUpload}><i class="material-icons">send</i></button>
        </>
        
      )}
    </div>
  );
}

export default Home;