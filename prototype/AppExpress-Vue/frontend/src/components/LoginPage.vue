<template>
  <div>
      <p>
        <input type="text" message="ID" v-model="id"></input>
      </p>
      <p>
        <input type="password" v-model="password"></input>
      </p>
      <p>
        <button v-on:click="sendLogin">Log in</button>
        <button>Sign up</button>
      </p>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        id: '',
        password: ''
      }
    },
    methods: {
      // 로그인 정보 보내기
      sendLogin() {
        console.log(this.id, this.password);
        this.$http.get('http://localhost:3000/api/logins?id=' + this.id + '&pw=' + this.password)
        .then((response) => {
          console.log(response);
          console.log(response.request.response);
        })
      },
    }
  }
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
