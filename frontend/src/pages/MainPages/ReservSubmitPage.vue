<!-- push test-->
<template id="ReservSubmitPage">
  <v-ons-page>
    <v-ons-list>
      
      <div class="center"
      style="margin-top: 3%;">진료병원</div>

      <v-ons-list-item>
        <div class="center">
            <select 
            v-model="chosenHospital"
            @click="checkHospitalChosen()"
          >
            <option 
            v-for = "hospital in hospitals"
            v-bind:value="hospital.value">
              {{ hospital.text }}
            </option>
          </select>          

        </div>
      
      
      </v-ons-list-item>

      <div class="center"
      style="margin-top: 1%;">진료과</div>
      
      <v-ons-list-item>
        <div class="center">
            <select
             v-model="chosenDepartment"
            >
                <option 
                 v-for = "department in departments"
                 v-bind:value="department.value">
                 {{ department.text }}
                </option>
            </select>

        </div>
      </v-ons-list-item>

      <div class="center"
      style="margin-top: 1%;">날짜를 선택하세요</div>
      
      <v-ons-list-item>
        <div class="center">
            <select
            v-model="resDate"
            >
                <option
                v-for = "date in resDates"
                v-bind:value="date.value">
                {{ date.text }}
                </option>
            </select>
        </div>
      </v-ons-list-item>

      <div class="center"
      style="margin-top: 1%;">시간을 선택하세요</div>

      <v-ons-list-item>
        <div class="center"
            <select
            v-model="resTime"
            >
                <option
                v-for = "time in times"
                v-bind:value="time.value">
                {{ time.text }}
                </option>
            </select>
        </div>
    </v-ons-list-item>

    <v-ons-list-item>
        <div class="center"
            <input placeholder="증상을 입력해 주세요" v-model="symptom"></input>
        </div>
    </v-ons-list-item>
    
    </v-ons-list>

    <v-ons-row>
        <v-ons-col>
            <v-ons-button
            class="someButton"
            @click="submmiting()">예약
            </v-ons-button>
        </v-ons-col>
        <v-ons-col>
            <v-ons-button
            class="someButton"
            @click="cancel()">취소
            </v-ons-button>
        </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
import MainPage from '../MainPage'
import ReservInfoPage from './ReservInfoPage'
export default {
  name: 'ReservSubmitPage',
    data() {
        return {
           hospitals: [
                { text: '', value: '' },
                { text: '경대병원', value: 1000 },
                { text: '영대병원', value: 2000 },
                { text: '동산병원', value: 3000 },
            ],
            departments: [
                { text: '', value: ''},
                { text: '외과', value: 1 },
                { text: '내과', value: 2 },
                { text: '정형외과', value: 3 },
                { text: '신경외과', value: 4},
                { text: '안과', value: 5 },
                { text: '이비인후과', value: 6 },
                { text: '소아과', value: 7 },
                { text: '치과', value: 8 },
                { text: '산부인과', value: 9 },
                { text: '정신과', value: 10 },
                { text: '흉부외과', value: 11 },
                { text: '피부과', value: 12 },
                { text: '성형외과', value: 13 },
            ],
            resDates: [
                { text: '', value: '' },

                 
            ],
            times: [
                { text: '', value: ''},
                { text: '9:00', value: '9:00:00' },
                { text: '9:30', value: '9:30:00' },
                { text: '10:00', value: '10:00:00' },
                { text: '10:30', value: '10:30:00' },
                { text: '11:00', value: '11:00:00' },
                { text: '11:30', value: '11:30:00' },
                { text: '13:30', value: '13:30:00' },
                { text: '14:00', value: '14:00:00' },
                { text: '14:30', value: '14:30:00' },
                { text: '15:00', value: '15:00:00' },
                { text: '15:30', value: '15:30:00' },
                { text: '16:00', value: '16:00:00' },
                { text: '16:30', value: '16:30:00' },
                { text: '17:00', value: '17:00:00' },
                { text: '17:30', value: '17:30:00' },
            ],
        
            chosenHospital: '',
            chosenDepartment: '',
            selectedItem: 'Vue',
            resDate: '',
            resTime: '',
            symptom: '',
            isHospitalChosen: false,
        };
    },

    created() {
            var curDate = new Date();
            var i = 0;
            for(i = 0; i < 7; i++) {
                curDate.setDate(curDate.getDate() + 1);
                var curDateString = (curDate.getYear() + 1900) + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate();
                this.resDates.push({ text: curDateString, value: curDateString });
            }

    },
    methods: {
        checkHospitalChosen() {
            // if (this.chosenHospital === '')
            //     this.isHospitalChosen = false;
            // else if(this.chosenHospital !=='')
                this.isHospitalChosen = true;
        },

        submmiting() {
          console.log('clicked');
            var hosID = this.chosenHospital + this.chosenDepartment;

            if (this.chosenHospital === '') {
                this.$ons.notification.alert('Choose Hospital');
                return;
            } else if (this.chosenDepartment === '') {
                this.$ons.notification.alert('Choose Department');
                return;
            } else if (this.resDate === '') {
                this.$ons.notification.alert('Choose Date');
                return;
            } else if (this.resTime === '') {
                this.$ons.notification.alert('Choose Time');
                return;
            } else if (this.symptom === '') {
                this.$ons.notification.alert('Write Symptom');
                return;
            } else {

                this.$http.get('http://' + this.$localIp + ':3000/api/reserv-submit?patientID=' + MainPage.patientInfo['id'] + '&hospitalID=' + hosID + '&symptom=' + this.symptom + '&resDate=' + this.resDate + '&resTime=' + this.resTime).then((response) => {
                    if(response.data == "success") {
                        this.$ons.notification.alert("예약이 완료되었습니다.");
                        this.$emit('submit');
                    
                    }
                    else {
                        this.$ons.notification.alert('에러');
                        return;
                    }

                });
            }
        },
        cancel() {
            this.$emit('pop-page');
        },
    },
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
select{
  text-align: center;
  width: 100%;
  height: 100%;
}
ons-button {
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
  text-align: center;
  
}
ons-input {
  width: 100%;
  margin-top: 0%;
}
ons-list-item {
  height: 0%;
}
div{
  text-align: center;
  font-size: 150%;
}
v-ons-list-header{
  width: 100%;
  text-align: center;
}
</style>
