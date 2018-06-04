<!-- push test-->
<template id="InquirePage">
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
                    {{ item.resDate }}
                    {{ item.resTime }}
                </div>
            </v-ons-row>
            <v-ons-row>
                <div class="content" style="margin-top: 5px">
                    {{ item.patientName }}<br/>
                    {{ item.symptom }}
                </div>
            </v-ons-row>
        </v-ons-col>

        </v-ons-row>
  </v-ons-card>  


  </v-ons-page>
</template>

<script>
import DoctorPage from '../DoctorPage'

export default {
  name: 'InquirePage',
  data () {
    return {
      cardList: [
      {
            type: '',
            title: "",
            resDate: "",
            resTime: "",
            patientName: "",
            symptom: "",
        
        },
        {
            type: '',
            title: "",
            resDate: "",
            resTime: "",
            patientName: "",
            symptom: "",
        
        },
        {
            type: '',
            title: "",
            resDate: "",
            resTime: "",
            patientName: "",
            symptom: "",

        },
        {
            type: '',
            title: "",
            resDate: "",
            resTime: "",
            patientName: "",
            symptom: "",

        },
        {
            type: '',
            title: "",
            resDate: "",
            resTime: "",
            patientName: "",
            symptom: "",

        },
    ],
      numCard: 5,
      fabVisible: true,
      reservList: [],
    }
  },
    created() {
        this.$http.get('http://localhost:3000/api/inquire?hosID=' + DoctorPage.doctorInfo['hospitalID']).then((response) => {
        this.reservList = response.data;
        var cnt = this.reservList.length;
        var i = 0;
        this.cardList.splice(0, this.cardList.length);
        for(i = 0; i < cnt; i++) {
            this.cardList.push( {
            type: 'reservation',
            title: "예약",
            resDate: this.reservList[i]['resDate'],
            resTime: this.reservList[i]['resTime'],
            patientName: this.reservList[i]['name'],
            symptom: this.reservList[i]['symptom'],
            });
        }
    });
  },
    
    methods: {
    getNumCard() {
        return 5;
    },
  },
};
</script>
