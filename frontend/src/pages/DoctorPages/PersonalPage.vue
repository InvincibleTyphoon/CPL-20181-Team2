<template id="PersonalPage">
  <v-ons-page>

      <v-ons-card>
        <div class="title">
            <v-ons-col> 안녕하세요 {{personName}}님! </v-ons-col>
            <v-ons-col> {{hosName + " " + officeName}} </v-ons-col>
        </div>
      </v-ons-card>
  </v-ons-page>
</template>

<script>
import DoctorPage from '../DoctorPage'

export default {
  name: 'PersonalPage',
  data () {
    return {
      personName: DoctorPage.doctorInfo.name,
      hosName: DoctorPage.hosInfo.name,
      officeName: DoctorPage.hosInfo.office,
    }
  },
  methods: {
  }
};
</script>
