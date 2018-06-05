<template id="PersonalPage">
  <v-ons-page>
      <v-ons-navigator swipeable
        :page-stack="pageStack"
        @push-page="pageStack.push($event)"
        @pop-page="pageStack.pop()"
      ></v-ons-navigator>
  </v-ons-page>
</template>

<script>
import PersonalMainPage from "./PersonalMainPage"
import MainPage from '../MainPage.vue'
export default {
  name: 'PersonalPage',
  data () {
    return {
      pageStack: [PersonalMainPage],
      personInfo: MainPage.patientInfo,
    }
  },
  methods: {
  }
};
</script>
