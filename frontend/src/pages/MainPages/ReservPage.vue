<template id="ReservPage">
  <v-ons-page>

  <v-ons-card v-for="item in cardList">
    <v-ons-row>
        <v-ons-col width="70%">
            <v-ons-row>
                <div class="title" style="font-size: 20px">
                    {{ item.title }}
                </div>
                <div class="fontsmall"
                    style="font-size: 10px; text-align:right; margin:6px; margin-top:14px"
                >
                    {{ item.cardDate }}
                </div>
            </v-ons-row>
            <v-ons-row>
                <div class="content" style="margin-top: 5px">
                {{ item.hospital }}
                <div class="content" style-="margin-top: 5px">
                {{ item.office }}
            </div>
        </v-ons-row>
    </v-ons-col>

    <v-ons-col width="30%">
        <div class="right">
            <v-ons-button modifire="outline large" style="margin:3px"> 자세히 </v-ons-button>
        </div>
    </v-ons-col>
  </v-ons-card>  

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
      cardList: [
        {
            type: 'reservation',
            title: "예약",
            cardDate: "05-18 10:00",
            hospital: "경북대학교 병원",
            office: "외과",
        },
        {
            type: 'reservation',
            title: "예약",
            cardDate: "05-19 15:00",
            hospital: "경북대학교 병원",
            office: "정형외과",
        },
      ],
      numCard: 2,
      fabVisible: true,
    }
  },
  methods: {
    getNumCard() {
        return 2;
    },
  }

};
</script>
