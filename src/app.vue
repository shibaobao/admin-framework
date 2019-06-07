<template>
  <div class="v-app">
    <v-header></v-header>
    <section class="v-main">
      <side-nav></side-nav>
      <router-view />
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from 'components/v-header'
import vFooter from 'components/v-footer'
import sideNav from 'components/side-nav'

export default {
  data () {
    return {}
  },
  watch: {
    '$route' (to) {}
  },
  components: {
    vHeader,
    vFooter,
    sideNav
  }
}
</script>

<style lang="scss" scoped>
.v-app {
  height: 100%;
  .v-main {
    display: flex;
    height: calc(100% - 60px);
  }
}
</style>
