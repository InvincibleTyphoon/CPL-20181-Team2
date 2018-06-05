<template id="PersonalMainPage">
  <v-ons-page>
      <v-ons-card>
        <div class="header">
            <img src="../../assets/logo.png" alt="vue-logo">
        </div>
        <div class="title">
          안녕하세요 {{personName}}님!
        </div>
      </v-ons-card>

      <v-ons-row>
        <v-ons-col>
            <v-ons-card @click="pushInfoPage()">
                <div class="title">
                    개인 정보 조회 >
                </div>
            </v-ons-card>
        </v-ons-col>

        <v-ons-col>
            <v-ons-card @click="pushPrescriptPage()">
                <div class="title">
                    진료 기록 조회 >
                </div>
            </v-ons-card>
        </v-ons-col>
      </v-ons-row>

  </v-ons-page>
</template>

<script>
import MainPage from '../MainPage'
import PersonalInfoPage from './PersonalInfoPage'
import PersonalPrescriptPage from './PersonalPrescriptPage'

export default {
  name: 'PersonalMainPage',
  data () {
    return {
      personName: MainPage.patientInfo.name,
    }
  },
  methods: {
      pushInfoPage() {
          this.$emit("push-page", PersonalInfoPage);
      },
      pushPrescriptPage() {
          this.$emit("push-page", PersonalPrescriptPage);
      }
  }
};
</script>


<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

.someButton {
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
}

ons-button {
  margin-top: 10px;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
}

ons-input {
  margin-left: 30px;
  width: 100%;
}

ons-list-title {
  text-transform: none;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}
</style>
