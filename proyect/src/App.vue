<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, "test@gmail.com",
"123456")
.then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  if(user== null)
  {
    console.log("no autenticado") }
  else
  {
    console.log("usuario autenticado", user);
  }
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);
});

</script>
