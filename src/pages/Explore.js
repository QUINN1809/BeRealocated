import React from 'react';
import storage from "../firebase_setup/firebase";
import { ref, getDownloadURL, listAll, getStorage } from 'firebase/storage';
import styles from "./Explore.module.css";
const Explore = () => {
  // Create a reference under which you want to list
  var storage = getStorage();
  var listRef = ref(storage, 'files');
  var imgId = 0;
  // Fetch the first page of 10
 
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        listAll(folderRef).then((result) => {
          result.items.forEach((itemRef) => {
            getDownloadURL(itemRef).then((url) => {
              const img = document.getElementById(imgId);
              img.setAttribute('src', url);
              imgId++;
              setTimeout(100);
            })
              .catch((error) => {
                // Handle any errors
              });
            // All the items under listRef.
          });
        });
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  

  /* DOESN"T WORK will fix when theres time
  !!! in JS
  const Diplay = (src, id, className) => {
        return(
          <img src={src} id = {id} alt="Nothing here yet! Here"></img>
        );
      }
  
      !!! In JSX
        {posts.map(({ id, src }) => (
          <Diplay
            src={src}
            id={id}
            className={styles.image}
          >
          </Diplay>))}      
        */
  return (
    <div className={styles.body}>

      <img className={styles.image} id={0} alt="Nothing here yet!"></img>
      <img className={styles.image} id={1} alt="Nothing here yet!"></img>
      <img className={styles.image} id={2} alt="Nothing here yet!"></img>
      <img className={styles.image} id={3} alt="Nothing here yet!"></img>
      <img className={styles.image} id={4} alt="Nothing here yet!"></img>
      <img className={styles.image} id={5} alt="Nothing here yet!"></img>
      <img className={styles.image} id={6} alt="Nothing here yet!"></img>
      <img className={styles.image} id={7} alt="Nothing here yet!"></img>
      <img className={styles.image} id={8} alt="Nothing here yet!"></img>
      <img className={styles.image} id={9} alt="Nothing here yet!"></img>
    </div>
  );
}
export default Explore;