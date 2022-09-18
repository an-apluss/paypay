<template>
  <q-layout view="lHh Lpr lFf">

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
