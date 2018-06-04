<template id="LoginPage">
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$emit('toggleMenu')">
          <v-ons-icon icon="fa-bars"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <br/>
    <v-ons-card>
      <br/><br/>
        <div class="header">
          <img src="../assets/logo.png" alt="vue-logo">
        </div>
      <br/><br/>
    </v-ons-card>
    <br/>

    <!-- login session -->
    <v-ons-list-title>Login</v-ons-list-title>

    <!-- input -->
    <v-ons-list>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="ID" v-model="dataID"></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="password" v-model="dataPW" type="password"></v-ons-input>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <!-- buttons -->
    <v-ons-row>
      <v-ons-col>
        <v-ons-button @click="loginCheck()" class="someButton">Log in</v-ons-button>
      </v-ons-col>
      <v-ons-col>
        <v-ons-button @click="signUp()" class="someButton">Sign up</v-ons-button>
      </v-ons-col>
    </v-ons-row>

    <v-ons-row>
      <v-ons-col>
        <v-ons-button @click="doctorLogin()"
          modifier="outline"
          style="margin-left:5%; margin-right:5%; width:90%">
          Doctor Log in
        </v-ons-button>
      </v-ons-col>
    </v-ons-row>
    <!-- login session end -->


  </v-ons-page>
</template>

<script>
import MainPage from './MainPage.vue'
import SignUpPage from './SignUpPage.vue'
import DoctorPage from './DoctorPage.vue'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Hoscare',
      dataID: '',
      dataPW: '',
      pageList: {

      },
    }
  },
  methods: {
    notify (notiobj, message) {
      notiobj.alert(message);
    },

    loginCheck () {
      console.log(this.dataID, this.dataPW);

      // get 경로에 테스트할 서버 주소를 입력해야함.
      this.$http.get('http://localhost:3000/api/logins?id=' + this.dataID + '&pw=' + this.dataPW)
      .then((response) => {
        console.log(response);
        if (response.data == "") {
          this.notify(this.$ons.notification, '로그인 정보가 알맞지 않습니다.');
        }
        else {

            console.log(response.data);
            this.$emit('push-page', MainPage);
            MainPage.patientInfo = response.data;
            MainPage.updateAll();
        }
      });


      // push page navigator
      //this.$emit('push-page', MainPage);
    },

    signUp() {
            this.$emit('push-page', SignUpPage);
    },

    doctorLogin() {
            this.$http.get('http://localhost:3000/api/doctorLogins?id=' + this.dataID + '&pw=' + this.dataPW)
            .then((response) => {
            if(response.data == "") {
                this.notify(this.$ons.notification, '로그인 정보가 알맞지 않습니다.');
            }
            else {
                console.log(response.data);
                this.$emit('push-page', DoctorPage);
                DoctorPage.doctorInfo = response.data[0];
                DoctorPage.hosInfo = response.data[1];
            }
        });
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
