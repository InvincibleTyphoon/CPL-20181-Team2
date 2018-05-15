<template id="CouncelPage">
  <v-ons-page>
      <p style="text-align:center">
          hello Councel Page
      </p>




      <v-ons-bottom-toolbar>
        <v-ons-row class="myBottom">
          <v-ons-col width="78%">
            <div class="left">
              <v-ons-input placeholder="Input your message"
                v-model="message" width="50%">
              </v-ons-input>
            </div>
          </v-ons-col>

          <v-ons-col width="15%">
            <div class="right">
              <v-ons-toolbar-button> <!--@click="$emit('toggleMenu')">-->
                <v-ons-icon icon="ion-arrow-up-a"></v-ons-icon>
              </v-ons-toolbar-button>
            </div>
          </v-ons-col>
        </v-ons-row>
      </v-ons-bottom-toolbar>
  </v-ons-page>
</template>

<script>
export default {
  name: 'CouncelPage',
  data () {
    return {
    }
  },
  methods: {
  }
};
</script>

<style>
.myBottom {
  margin: 7px 10px 5px 20px;
}
</style>