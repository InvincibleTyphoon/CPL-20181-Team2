<template>
    <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
    ></v-ons-navigator>
</template>


<template>
  <v-ons-page id="app">

    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <home-page @toggleMenu="menuIsOpen = !menuIsOpen"></home-page>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import MainPage from './pages/MainPage'


export default {
  name: 'app',
  data () {
    return {
      menuIsOpen: false,
      pageStack: [HomePage],
    }
  },
  components: {
    HomePage,
    MenuPage,
    MainPage
  }
}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
