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

export default {
  name: 'PersonalPage',
  data () {
    return {
      pageStack: [PersonalMainPage],
    }
  },
  methods: {
  }
};
</script>
