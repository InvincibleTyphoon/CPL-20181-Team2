<template>
  <v-ons-page id="ReservPage">

    <v-ons-splitter>

      <v-ons-splitter-content>
        <v-ons-navigator swipeable
          :page-stack="pageStack"
          @push-page="pageStack.push($event)"
          @pop-page="pageStack.pop()"
          @submit="updateInfo()"
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
  
  methods: {
        
        updateInfo() {
                this.pageStack.push(ReservInfoPage);
                this.$ons.notification.alert(this.pageStack.length);
                this.pageStack.splice(0, 2);
        },

  
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
