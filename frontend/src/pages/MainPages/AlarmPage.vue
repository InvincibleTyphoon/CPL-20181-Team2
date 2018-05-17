<template id="AlarmPage">
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
            {{ item.text }}
          </div>
        </v-ons-row>
      </v-ons-col>

      <v-ons-col width="30%">
        <div class="right">
          <v-ons-button modifier="outline large" style="margin:3px"> 확인 </v-ons-button>
          <v-ons-button modifier="outline large" style="margin:3px"> 취소 </v-ons-button>
        </div>
      </v-ons-col>
    </v-ons-row>
  </v-ons-card>

  </v-ons-page>
</template>

<script>
export default {
  name: 'AlarmPage',
  data () {
    return {
      cardList: [
        {
          type: 'prescription',
          title: "복약",
          cardDate: "05-17 12:30",
          text: "약을 복용 하셨습니까?",
        },
        {
          type: 'prescription',
          title: "복약",
          cardDate: "05-17 18:00",
          text: "약을 복용 하셨습니까?",
        },
        {
          type: 'reservation',
          title: "예약",
          cardDate: "05-17 20:00",
          text: "내일 경북대학교 병원에서 외과 진료예약이 있습니다.",
        },
        {
          type: 'prescription',
          title: "복약안내",
          cardDate: "05-17 7:00",
          text: "약을 복용 하셨습니까?",
        },
        {
          type: 'prescription',
          title: "복약안내",
          cardDate: "05-17 18:00",
          text: "약을 복용 하셨습니까?",
        },
      ],
      numCard: 5,
    };
  },
  methods: {
    getNumCard() {
      return 5;
    },
  }
};

</script>


<style>
.fontbig {
  font-size: x-large,
}
.fontsmall {
  font-size: 6px,
}
</style>