<template>
  <v-ons-page id="app">

    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <v-ons-navigator swipeable
          :page-stack="pageStack"
          @push-page="pageStack.push($event)"
          @pop-page="pageStack.pop()"
          @toggleMenu="menuIsOpen = !menuIsOpen"
        ></v-ons-navigator>
        <!--<main-page @toggleMenu="menuIsOpen = !menuIsOpen"></main-page>-->
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
//import SignUpPage from './pages/SignUpPage'

export default {
  name: 'app',
  data () {
    return {
      menuIsOpen: false,
      pageStack: [LoginPage],
    }
  },
  components: {
    LoginPage,
    MenuPage,
  }
}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
