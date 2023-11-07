<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import NavigationDrawer from './components/NavigationDrawer.vue';
</script>

<template>
  <v-app>
    <v-header>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Template</v-app-bar-title>
      </v-app-bar>
    </v-header>
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            :to="route.to"
            :prepend-icon="route.icon"
            :title="route.name"
            :value="route.name"
          ></v-list-item>

        </v-list>
      </v-navigation-drawer>
      <v-container>
        <v-col>
          <RouterView />
        </v-col>
      </v-container>

    </v-main>

  </v-app>

</template>


<script>
export default {
  data: () => ({
    drawer: null,
    routes: [
      {
        name: 'Home',
        to: '/',
        icon: 'mdi-folder'
      },
      {
        name: 'Products',
        to: '/products',
        icon: 'mdi-folder'
      },
      {
        name: 'About',
        to: '/about',
        icon: 'mdi-folder'
      }
    ]
  })
}
</script>

<style scoped>
</style>
