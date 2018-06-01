<template>
  <v-ons-page id="ReservPage">

    <v-ons-splitter>

      <v-ons-splitter-content>
        <v-ons-navigator swipeable
          :page-stack="pageStack"
          @push-page="pageStack.push($event)"
          @pop-page="pageStack.pop()"
          @toggleMenu="menuIsOpen = !menuIsOpen"
        ></v-ons-navigator>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import ReservInfoPage from './ReservInfoPage'
import ReservSubmitPage from './ReservSubmitPage'

export default {
  name: 'ReservPage',
  data () {
    return {
      pageStack: [ReservInfoPage],
      patientID: '',
    }
  },

  components: {
    ReservInfoPage,
    ReservSubmitPage,
  }
}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
