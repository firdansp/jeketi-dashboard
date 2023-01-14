<template>
  <div id='firebaseui-auth-container'></div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
  created: () => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      signInOptions: [
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
}
</script>

<style>

</style>