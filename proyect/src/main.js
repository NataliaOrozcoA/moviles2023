import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

//////////////////////////////FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_2d6BDCXQYDwQUSfBEVDZnaClfywcIv4",
  authDomain: "practicaandroid-c3f18.firebaseapp.com",
  databaseURL: "https://practicaandroid-c3f18-default-rtdb.firebaseio.com",
  projectId: "practicaandroid-c3f18",
  storageBucket: "practicaandroid-c3f18.appspot.com",
  messagingSenderId: "142964134241",
  appId: "1:142964134241:web:febdab476c13ec9725f520"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
///////////////////////////77

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appfirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});

