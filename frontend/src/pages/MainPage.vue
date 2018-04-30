<template id="MainPage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">MainPage</div>
    </v-ons-toolbar>
    <p style="text-align: center">
      <v-ons-button @click="push()">Push Page 2</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {

    }
  },
  methods: {
    push() {
      this.$emit('push-page', this.MainPage);
    },
  }
};

</script>
