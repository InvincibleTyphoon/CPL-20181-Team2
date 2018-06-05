<template id="PrescriptInquirePage">
  <v-ons-page>

<v-ons-card v-for="item in cardList">
    <v-ons-row>
        <v-ons-col width="70%">
            <v-ons-row>
                <div class="title" style="font-size: 20px">
                    {{ "처방" }}
                </div>
                <div>
                    {{ "의약품 명 : " +  item.name }}
                </div>
            </v-ons-row>
            <v-ons-row>
                <div class="content" style="margin-top: 5px">
                    {{ item.startDate + "~" + item.endDate }}
                    
                </div>
            </v-ons-row>
            <v-ons-row>
                <div>
                    {{ "처방 횟수 " + item.curCnt + " / " + item.maxCnt }}
                    {{ " 1일 기준 " + item.dayCurCnt + " / " + item.dayMaxCnt }}
                </div>
            </v-ons-row>
            <v-ons-row>
                <div>   {{ "주의 : " + item.note }}
                </div>
            </v-ons-row>
        </v-ons-col>
    </v-ons-row>
  </v-ons-card>     

    <v-ons-button @click="popPage()" class="someButton">
        뒤로
    </v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  name: 'PrescriptInquirePage',
  data () {
    return {
        cardList: [
                {
                    startDate: "2018-06-01",
                    endDate: "2018-06-06",
                    name: "무코에스정",
                    curCnt: 6,
                    maxCnt: 15,
                    dayCurCnt: 1,
                    dayMaxCnt: 3,
                    note: "습기를 주의하세요. 서늘한 곳에 보관하세요."
                },
                {
                    startDate: "2018-06-01",
                    endDate: "2018-06-06",
                    name: "포부틴정",
                    curCnt: 6,
                    maxCnt: 15,
                    dayCurCnt: 1,
                    dayMaxCnt: 3,
                    note: "습기를 주의하세요. 서늘한 곳에 보관하세요."
                },
                {
                    startDate: "2018-06-01",
                    endDate: "2018-06-06",
                    name: "삼천당오플록사신정",
                    curCnt: 6,
                    maxCnt: 15,
                    dayCurCnt: 1,
                    dayMaxCnt: 3,
                    note: "자외선을 피하세요. 위장장애가 나타날 수 있어요."
                },
            ],
        }

    },
  methods: {
      popPage() {
          this.$emit("pop-page");
      },
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
