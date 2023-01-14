<template>
  <div id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="home">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Beranda</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="subscription">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-file-document-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Daftar Langganan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="subscribeView">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <div>
      <router-view>
      </router-view>
    </div>
    <v-footer color="indigo" app>
    </v-footer>
  </div>
</template>

<script>
  import Card from '../components/Card';
  import Subscribe from '@/views/Subscribe';

  export default {
    props: {
      source: String,
    },
    components: {
      Card,
      Subscribe
    },
    data: function () {
      return {
        drawer: false,
        search: false,
      }
    },
    computed: {
      subscribeView: function () { 
        return this.$route.path === '/subscription'
      }
    }
  }
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>