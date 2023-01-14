import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const firebaseConfig = {
  apiKey: "AIzaSyDGLmTYv-0JPhI1dK5WZHob62aIY1vO8cA",
  authDomain: "f4-dev-circle.firebaseapp.com",
  databaseURL: "https://f4-dev-circle.firebaseio.com",
  projectId: "f4-dev-circle",
  storageBucket: "f4-dev-circle.appspot.com",
  messagingSenderId: "529098313057",
  appId: "1:529098313057:web:72a700c1f5a5e4a0958920"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000'
});
Vue.prototype.$firebase = firebase;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
