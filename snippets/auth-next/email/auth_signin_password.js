// This snippet file was generated by processing the source file:
// ./auth-next/email.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_signin_password_modular]
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
// [END auth_signin_password_modular]