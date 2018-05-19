<template id="LoginPage">
  <v-ons-page>

    <div class="header">
      <img src="../assets/logo.png" alt="vue-logo">
    </div>


    <!-- login session -->
    <v-ons-list-title>Sign Up</v-ons-list-title>

    <!-- input -->
    <v-ons-list>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="ID를 입력하세요" v-model="dataID"></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="비밀번호를 입력하세요" v-model="dataPW" type="password"></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="비밀번호를 한번 더 입력하세요" v-model="dataPWRe" type="password"></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="이름을 입력하세요" v-model="dataName"></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div>
          <v-ons-input placeholder="생년월일" v-model="dataBirth" type="date"></v-ons-input>
        <div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div>
            <v-ons-input placeholder="휴대폰 번호" v-model="dataPhone"></v-ons-input>
        </div>
      </v-ons-list-item>

    </v-ons-list>

// pop하는 방법 몰라서 back-button 사용..
    <!-- buttons -->
    <v-ons-row>
      <v-ons-col>
        <v-ons-back-button @click="signUpCheck()" class="someButton">확인</v-ons-back-button>
      </v-ons-col>
      <v-ons-col>
        <v-ons-back-button class="someButton">취소</v-ons-back-button>
      </v-ons-col>
    </v-ons-row>
    <!-- login session end -->


  </v-ons-page>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      msg: 'Hoscare',
      dataID: '',
      dataPW: '',
      dataPWRe: '',
      dataName: '',
      dataBirth: '',
      dataPhone: '',
      pageList: {

      },
    }
  },
  methods: {
    notify (notiobj, message) {
      notiobj.alert(message);
    },

    signUpCheck () {
      console.log(this.dataID, this.dataPW);
      // 회원 정보를 입력한 것을 DB에 저장하기 위해 보냄!!
      this.$http.get('http://localhost:3000/api/sign-up?id=' + this.dataID + '&pw=' + this.dataPW + '&rePw=' + this.dataPWRe + '&name=' + this.dataName + '&birthday=' + this.dataBirth + '&phone=' + this.dataPhone)
      .then((response) => {
        if (response.data == 'success') {
          this.notify(this.$ons.notification, '회원가입 완료.');
        }
        else if (response.data == 'dup') {
            this.notify(this.$ons.notification, '중복된 ID가 있습니다.');
        }
        else if (response.data == 'noMatch') {
            this.notify(this.$ons.notification, '비밀번호가 일치하지 않습니다.');
        }
        else if (response.data == 'noInput') {
            this.notify(this.$ons.notificaion, '입력하지 않은 것이 있습니다.');
        }
        else {
            this.notify(this.$ons.notification, 'Error..');
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
