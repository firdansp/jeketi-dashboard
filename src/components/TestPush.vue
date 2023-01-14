<template>
  <div>test push page. {{fcmtoken}}</div>
</template>

<script>
let messaging;
export default {
  data: function () {
    return {
      fcmtoken: ''
    }
  },
  created: function () {
    messaging = this.$firebase.messaging();
    messaging.usePublicVapidKey('BDz0vcGhFyPGk8lt_4peavsE4bpR4C3PZWq1JpfpgqktUHqkxX6NU4YYLHjPorj7fyH1IZRblby8ppJ4fBmMvkI');
    messaging.onMessage( payload => {
      console.log(`received a message ${payload}`);
    })
  },
  mounted: async function () {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const currentToken = await messaging.getToken()
      if (currentToken) {
        console.log(`current token ${currentToken}`);
        console.log(currentToken)
        this.fcmtoken = currentToken;
        // updateUIForPushEnabled(currentToken);
      } else {
        console.log('No Instance ID token available. Request permission to generate one.');
        updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
      }
    } else {
      console.log('Unable to get permission to notify.');
    }
  }
}
</script>

<style>

</style>