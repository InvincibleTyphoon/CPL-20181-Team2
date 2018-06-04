<template id="PersonalPrescriptPage">
  <v-ons-page>
    

    <v-ons-button @click="popPage()" class="someButton">
        뒤로
    </v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  name: 'PersonalPrescriptPage',
  data () {
    return {
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
