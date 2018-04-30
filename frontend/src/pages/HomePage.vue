<template id="HomePage">
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$emit('toggleMenu')">
          <v-ons-icon icon="fa-bars"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <div class="header">
      <img src="../assets/logo.png" alt="vue-logo">
    </div>


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
        <v-ons-button class="someButton">Sign up</v-ons-button>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-button modifier="large" @click="notify($ons.notification, '이건가?')">Push Alarm Test</v-ons-button>
    </v-ons-row>
    <!-- login session end -->


  </v-ons-page>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Login',
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
      this.$http.get('http://localhost:3000/api/logins?id=' + this.dataID + '&pw=' + this.dataPW)
      .then((response) => {
        console.log(response);
        console.log(response.request.response);
      });

      // push page navigator

      console.log(this.pageList);
      this.$emit('push-page', this.MainPage);
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
