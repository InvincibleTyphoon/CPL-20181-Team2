<template id="PersonalInfoPage">
  <v-ons-page>
    <v-ons-card>
        <v-ons-col>
            <v-ons-row>
                <div>
                    <v-ons-icon icon="contacts"></v-ons-icon>
                </div>
                <div> {{ personName }}</div>
            </v-ons-row>

            <v-ons-row>
                <div> {{ "생년월일 " + personBirthday.getFullYear() + "-" + (personBirthday.getMonth() + 1) + "-" + personBirthday.getDate()}} </div>
            </v-ons-row>
            <v-ons-row>
                <div> {{ "TEL " + personPhone }} </div>
            </v-ons-row>
        </v-ons-col>

    </v-ons-card>

    <v-ons-col>
            <v-ons-button class="someButton">수정</v-ons-button>
            <v-ons-button @click="popPage()" class="someButton">뒤로</v-ons-button>
    </v-ons-col>
  
  </v-ons-page>
</template>

<script>
import MainPage from '../MainPage'

export default {
  name: 'PersonalInfoPage',
  data () {
    return {
            personName: MainPage.patientInfo.name,
            personBirthday: new Date(MainPage.patientInfo.birthday),
            personPhone: MainPage.patientInfo.phone,
    }
  },
  methods: {
      popPage() {
          this.$emit("pop-page");
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

ons-card {
  text-align: center;
}
</style>

