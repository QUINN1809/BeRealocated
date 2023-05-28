// // Points to the root reference
// const storageRef = FirebaseStorage.instance.ref();

// // Points to "images"
// Reference? imagesRef = storageRef.child("images");
// // Points to "images/space.jpg"
// // Note that you can use variables to create child values
// const fileName = "space.jpg";
// const spaceRef = imagesRef.child(fileName);

// // File path is "images/space.jpg"
// const path = spaceRef.fullPath;

// // File name is "space.jpg"
// const name = spaceRef.name;

// // Points to "images"
// imagesRef = spaceRef.parent;