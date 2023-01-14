<template>
  <v-app>
    <v-content>
      <HelloWorld>
        
      </HelloWorld>
      <!-- <TestPush/> -->
      <!-- <LoginForm/> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './views/HelloWorld';
import LoginForm from './components/LoginForm';
import TestPush from './components/TestPush';

export default {
  name: 'App',

  components: {
    HelloWorld,
    LoginForm,
    TestPush
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-card__title {
  word-wrap: break-word;
}
</style>