<template id="AlarmPage">
  <v-ons-page>

<v-ons-list>
      <v-ons-card v-for="item in cardList">
            <v-ons-row>
        <v-ons-col>
              <v-ons-row>
                    <div class="title" style="font-size: 20px">
                      {{ item.title }}
                    </div>
                    <div class="fontsmall"
                      style="font-size: 10px; text-align:right; margin:6px; margin-top:14px"
                    >
                      {{ item.cardDate }}
                      {{ item.cardTime }}
                    </div>
              </v-ons-row>
             <div class="content" style="margin-top: 5px">
               {{ item.text }}
              </div>
        </v-ons-col>

        <v-ons-col width="30%">
              <div class="right">
                  <v-ons-button @click="prescription(item.id, cardList.indexOf(item))" modifier="outline large" style="margin:3px"> 확인 </v-ons-button>
              </div>
        </v-ons-col>
              
      </v-ons-card>
    </v-ons-list>

  </v-ons-page>
</template>

<script>
import MainPage from '../MainPage'

export default {
  name: 'AlarmPage',
  data () {
    return {
      cardList: [
        {
          type: '',
          title: "",
          cardDate: "",
          cardTime: "",
          text: "",
          id: "",
        },
      ],
      numCard: '',
      reservList: [],
      medicineList: [],
      sampleList: [
        {
          type: 'medicine',
          title: "복약",
          cardDate: "2018.06.05.",
          cardTime: "08:00",
          text: "아침 약을 복용하셨습니까",
          id: "",
        },
        {
          type: 'medicine',
          title: "복약",
          cardDate: "2018.06.05.",
          cardTime: "13:00",
          text: "점심 약을 복용하셨습니까",
          id: "",
        },
        {
          type: 'medicine',
          title: "복약",
          cardDate: "2018.06.05.",
          cardTime: "19:00",
          text: "저녁 약을 복용하셨습니까",
          id: "",
        }
      ],
      count : 0,
    };
  },

   mounted () {
    setTimeout(() => {
      this.cardList.push(this.sampleList[this.count]);
      this.count++;
      this.numCard++;
      this.$emit('updateAlarmBadge', this.cardList.length);
      this.pushList();
    }, 1000)
  },

  created() {
        this.$http.get('http://localhost:3000/api/alarm?id='+  MainPage.patientInfo['id']).then((response) => {
        this.reservList = response.data[0];
        this.medicineList = response.data[1];

        var reservCnt = this.reservList.length;
        var medicineCnt = this.medicineList.length;

        var i = 0;

        this.cardList.splice(0, this.cardList.length);
        for(i = 0; i < reservCnt; i++) {
            this.cardList.push( {
                type: 'reservation',
                title: "예약",
                cardDate: this.reservList[i]['resDate'],
                cardTime: this.reservList[i]['resTime'],
                text: "오늘 " + this.reservList[i]['name'] + "에서 " + this.reservList[i]['office'] + " 진료 예약이 있습니다.",
                id: this.reservList[i]['id']
            });
        }

        for(i = 0; i < medicineCnt; i++) {
            this.cardList.push( {
                type: 'medicine',
                title: "복약",
                cardDate: this.medicineList[i]['startDate'] + " ~ ",
                cardTime: this.medicineList[i]['endDate'],
                text: this.medicineList[i]['name'] + "을 복용하셨습니까?",
                id: this.medicineList[i]['id']
            });
        }
        
        this.numCard += this.cardList.length;
        this.$emit('updateAlarmBadge', this.numCard);
    });


  },

  methods: {
    getNumCard() {
      return this.numCard;
    },
    prescription(medID, idx) {
            this.$http.get('http://localhost:3000/api/prescription?id=?' + medID).then((response) => {
                    this.cardList.splice(idx, 1);
                    this.$emit('updateAlarmBadge', this.cardList.length);
            });
    },
    pushList() {
        //  testing code
        /*
        this.$http.get('http://localhost:3000/api/reservation?id='+  MainPage.patientInfo['id']).then((response) =>     {
          var cnt = response.data[0].length;
          var i = 0;
          for(i = 0; i < cnt; i++) {
              this.cardList.push( {
              type: 'reservation',
              title: "예약",
              cardDate: "cardDate",
              cardTime: "cardTime",
              item: "tiem",
              });
          }
        });
        */
    //      this.$http.get('http://localhost:3000/api/alarm?id='+  MainPage.patientInfo['id']).then((response) => {
    //     this.reservList = response.data[0];
    //     this.medicineList = response.data[1];

    //     var reservCnt = this.reservList.length;
    //     var medicineCnt = this.medicineList.length;

    //     var i = 0;

    //     this.cardList.splice(0, this.cardList.length);
    //     for(i = 0; i < reservCnt; i++) {
    //         this.cardList.push( {
    //             type: 'reservation',
    //             title: "예약",
    //             cardDate: this.reservList[i]['resDate'],
    //             cardTime: this.reservList[i]['resTime'],
    //             text: "오늘 " + this.reservList[i]['name'] + "에서 " + this.reservList[i]['office'] + " 진료 예약이 있습니다.",
    //             id: this.reservList[i]['id']
    //         });
    //     }

    //     for(i = 0; i < medicineCnt; i++) {
    //         this.cardList.push( {
    //             type: 'medicine',
    //             title: "복약",
    //             cardDate: this.medicineList[i]['startDate'] + " ~ ",
    //             cardTime: this.medicineList[i]['endDate'],
    //             text: this.medicineList[i]['name'] + "을 복용하셨습니까?",
    //             id: this.medicineList[i]['id']
    //         });
    //     }
        
    //     this.numCard = this.cardList.length;
    //     this.$emit('updateAlarmBadge', this.cardList.length);
    // });
      if (this.count < 3) {
        setTimeout(() => {
            this.cardList.push(this.sampleList[this.count]);
            this.count++;
            this.numCard++;
            this.$emit('updateAlarmBadge', this.cardList.length);
            this.pushList();
        }, 4000)
      }
    },
  },
}

</script>


<style>
.fontbig {
  font-size: x-large,
}
.fontsmall {
  font-size: 6px,
}
</style>
