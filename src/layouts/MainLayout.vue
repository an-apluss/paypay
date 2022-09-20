<template>
  <q-layout view="hHh LpR fff">

    <app-header />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>

</style>

<script>
import AppHeader from 'components/Header.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader
  },
  data () {
    return {
      
    }
  }
}
</script>
