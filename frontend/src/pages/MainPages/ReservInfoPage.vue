<!-- push test-->
<template id="ReservInfoPage"
v-on:updateList="update()">
  <v-ons-page>
  <v-ons-card v-for="item in cardList"
  @update='update()'>
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
                    {{ item.cardTime }}
                </div>
            </v-ons-row>
            <v-ons-row>
                <div class="content" style="margin-top: 5px">
                    {{ item.hospital }}<br/>
                    {{ item.office }}
                </div>
            </v-ons-row>
        </v-ons-col>

        <v-ons-col width="30%">
            <!-- 필요 없다해서 주석처리
            <div class="right">
                <v-ons-button modifire="outline large" style="margin:3px"> 자세히 </v-ons-button>
            </div>
            -->
            <div class="right">
                <v-ons-button @click="cancel(item.id, cardList.indexOf(item))" 
                modifier="outline large" 
                style="margin-top:50%-4px; line-height:1.5em">
                    예약<br/>취소
                </v-ons-button>
            </div>
        </v-ons-col>
  </v-ons-card>  

    <v-ons-fab
     position="bottom right"
     :visible="fabVisible"
     @click="pushSubmitPage()"
    >
        <v-ons-icon icon="calendar"></v-ons-icon>
    </v-ons-fab>

    <!-- 서원이 이거 뭐임?
    <v-ons-popover 
    -->

  </v-ons-page>
</template>

<script>
import MainPage from '../MainPage' 
import ReservSubmitPage from './ReservSubmitPage'
export default {
  name: 'ReservInfoPage',
  data () {
    return {
      cardList: [
      {
            type: '',
            title: "",
            cardDate: "",
            cardTime: "",
            hospital: "",
            office: "",
            id: "",
            hosID: "",
        },
        {
            type: '',
            title: "",
            cardDate: "",
            cardTime: "",
            hospital: "",
            office: "",
            id: "",
            hosID: "",
        },
        {
            type: '',
            title: "",
            cardDate: "",
            cardTime: "",
            hospital: "",
            office: "",
            id: "",
            hosID: "",
        },
        {
            type: '',
            title: "",
            cardDate: "",
            cardTime: "",
            hospital: "",
            office: "",
            id: "",
            hosID: "",
        },
        {
            type: '',
            title: "",
            cardDate: "",
            cardTime: "",
            hospital: "",
            office: "",
            id: "",
            hosID: "",
        },
    ],
      numCard: 5,
      fabVisible: true,
      reservList: [],
      hosList: [],
      id: '',
      isUpdate: false,    
    }
  },
    beforeCreate() {
        this.$http.get('http://localhost:3000/api/reservation?id='+  MainPage.patientInfo['id']).then((response) => {
        this.reservList = response.data[0];
        this.hosList = response.data[1];
        var cnt = this.reservList.length;
        var i = 0;
        this.cardList.splice(0, this.cardList.length);
        for(i = 0; i < cnt; i++) {
            this.cardList.push( {
            type: 'reservation',
            title: "예약",
            cardDate: this.reservList[i]['resDate'],
            cardTime: this.reservList[i]['resTime'],
            hospital: this.hosList[i]['name'],
            office: this.hosList[i]['office'],
            id: this.reservList[i]['id'],
            hosID: this.hosList[i]['id']
            });
        }
    });
  },
    
    methods: {
    getNumCard() {
        return 5;
    },
    pushSubmitPage() {
        this.$emit('push-page', ReservSubmitPage);
    },
    update() {    
        this.$ons.notification.alert("??");

        this.$http.get('http://localhost:3000/api/reservation?id='+  MainPage.patientInfo['id']).then((response) =>     {
        this.reservList.splice(0, this.reservList.length);
        this.hosList.splice(0, this.hosList.length);
        this.reservList = response.data[0];
        this.hosList = response.data[1];
        var cnt = this.reservList.length;
        var i = 0;
        this.cardList.splice(0, this.cardList.length);
        for(i = 0; i < cnt; i++) {
            this.cardList.push( {
            type: 'reservation',
            title: "예약",
            cardDate: this.reservList[i]['resDate'],
            cardTime: this.reservList[i]['resTime'],
            hospital: this.hosList[i]['name'],
            office: this.hosList[i]['office']
            });
        }
    });
  },
  cancel(resID, idx) {
    this.$http.get('http://localhost:3000/api/reserv-cancel?id=' + resID).then((response) => {
        this.$ons.notification.alert("취소 완료");
        this.cardList.splice(idx, 1);
        this.reservList.splice(idx, 1);
        this.hosList.splice(idx, 1);
    });
  }
  },
  components: {
    ReservSubmitPage,
 }
};
</script>
