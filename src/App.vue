<template>
  <div id="app">
    <div id="nav">
      <TheNavigation />
    </div>
    <router-view />
  </div>
</template>


<script>

import TheNavigation from '@/components/TheNavigation.vue'

  export default {
    components: { TheNavigation }
  }
</script>
