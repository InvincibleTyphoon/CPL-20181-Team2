<template id="PersonalPrescriptPage">
  <v-ons-page>

<v-ons-card v-for="item in cardList">
    <v-ons-row>
        <v-ons-col width="70%">
            <v-ons-row>
                <div class="title" style="font-size: 20px">
                    {{ "진료" }}
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
                    {{ item.hospital }}
                    {{ item.office }}
                </div>
            </v-ons-row>
            <v-ons-row>
                <div>   {{ "결과 " + item.result }}
                </div>
            </v-ons-row>
        </v-ons-col>

        <v-ons-col width="30%">
            <div class="right">
                <v-ons-button @click="pushPage()">조회
                </v-ons-button>
            </div>
        </v-ons-col>
  </v-ons-card>     

    <v-ons-button @click="popPage()" class="someButton">
        뒤로
    </v-ons-button>
  </v-ons-page>
</template>

<script>

import PrescriptInquirePage from './PrescriptInquirePage'

export default {
  name: 'PersonalPrescriptPage',
  data () {
    return {
        cardList: [
            {
                resDate: "2018-06-01",
                resTime: "11:00:00",
                hospital: "경대병원",
                office: "내과",
                result: "급성장염",
                medicineID: 0,
            },
            {
                resDate: "2018-06-03",
                resTime: "10:00:00",
                hospital: "경대병원",
                office: "정형외과",
                result: "X-ray 결과 다리골절",
                medicineID: 1,
            },
            {
                resDate: "2018-06-04",
                resTime: "14:00:00",
                hospital: "경대병원",
                office: "정형외과",
                result: "다리골절, 깁스",
                medicineID: 2,
            },
            {
                resDate: "",
                resTime: "",
                hospital: "",
                office: "",
                result: "",
                medicineID: "",
            },
             {
                resDate: "",
                resTime: "",
                hospital: "",
                office: "",
                result: "",
                medicineID: "",
            },
            ],
        }

    },
  methods: {
      popPage() {
          this.$emit("pop-page");
      },
      pushPage() {
            this.$emit("push-page", PrescriptInquirePage);
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
