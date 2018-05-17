<template id="CouncelPage">
  <v-ons-page>
      <v-ons-row>
        <div style="margin-left:auto">
          <v-ons-card style="background-color: #DDFFDD">
            안녕하세요.
          </v-ons-card>
        </div>
      </v-ons-row>
      <v-ons-row>
        <div style="margin-left:auto">
          <v-ons-card style="background-color: #DDFFDD">
            제가 지금 처방에대한 약을 복용하고 있는데, 루테인이 들어간 종합 영양제와
            같이 먹어도 되는가 궁금해서 연락드렸습니다.
          </v-ons-card>
        </div>
      </v-ons-row>
      <v-ons-row>
        <div style="margin-left:auto">
          <v-ons-card style="background-color: #DDFFDD">
            어떻게 해야하나요...
          </v-ons-card>
        </div>
      </v-ons-row>
      
      <v-ons-row>
        <div>
          <v-ons-card>
            약 성분을 더 구체적으로 말씀드리면 좋으나, 지금 받고계신
            처방에 대해서 보통의 종합 영양제를 복용하셨을 때 아무런 무리가 없습니다.
          </v-ons-card>
        </div>
      </v-ons-row>

      <v-ons-row>
        <div style="margin-left:auto">
          <v-ons-card style="background-color: #DDFFDD">
            오 감사합니다!
          </v-ons-card>
        </div>
      </v-ons-row>


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