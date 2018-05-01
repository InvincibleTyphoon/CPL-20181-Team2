<template id="ReservPage">
  <v-ons-page>
      <p style="text-align:center">
          hello Reservation Page
      </p>

      <v-ons-fab
      position="bottom right"
      :visible="fabVisible"
      >
        <v-ons-icon icon="ion-android-calendar"></v-ons-icon>
      </v-ons-fab>
  </v-ons-page>
</template>

<script>
export default {
  name: 'ReservPage',
  data () {
    return {
      fabVisible: true,
    }
  },
  methods: {
  }
};
</script>