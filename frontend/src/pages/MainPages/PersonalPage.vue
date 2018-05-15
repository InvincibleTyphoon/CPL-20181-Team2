<template id="PersonalPage">
  <v-ons-page>

      <v-ons-card>
        <div class="title">
          안녕하세요 {{personName}}님!
        </div>
      </v-ons-card>
  </v-ons-page>
</template>

<script>
import MainPage from '../MainPage'

export default {
  name: 'PersonalPage',
  data () {
    return {
      personName: MainPage.patientInfo.name,
    }
  },
  methods: {
  }
};
</script>
