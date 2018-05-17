<!-- push test-->
<template id="ReservPage">
  <v-ons-page>
    <v-ons-list>
      <div class="center"
      style = "  margin-top: 1%;
      margin-bottom: -5%;">진료 병원</div>
      <v-ons-list-item>
        <div class="center">
          <select 
            v-model="chosenHospital"
            @click="checkHospitalChosen()"
          >
            <option v-bind:key ="hospital in hospitals"
            v-for = "hospital in hospitals"
            :value="hospital.value">
              {{ hospital.text }}
            </option>
          </select>

        </div>
      </v-ons-list-item>
      <div class="center">진료 과</div>
      <v-ons-list-item>
        <div class="center">

          <select v-model="chosenDepartment"
            :disabled="!isHospitalChosen"
              >

            <option v-bind:key ="department in departments" 
            v-for = 'department in departments'
            :value="department.value">
              {{department.text}}
            </option>
          </select>

        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder = "Choose Month"
        style = "margin-top: 5%"
        v-model = "month">

        </v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder = "Choose Day"
          v-model = "day">

        </v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder = "Choose Hour"
        v-model = "hour">
        </v-ons-input>

      </v-ons-list-item>
    </v-ons-list>



      <v-ons-button
      @click="submmiting()">Submit
      </v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  name: 'ReservPage',
    data() {
        return {
            isHospitalChosen: false,
            hospitals: [
                { text: '', value: '' },
                { text: 'Ryuma Hospital', value: 'Vue', doctors: ['Kim', 'Lee', 'Park'] },
                { text: 'Gwak Hospital', value: 'React', doctors: ['Chan', 'Kyo', 'Ping'] },
                { text: 'Ahn Hospital', value: 'Angular', doctors: ['Json', 'OBJ', 'Clude'] },
            ],
            departments: [
                { text: 'Tooth', value: 'Tooth dep' },
                { text: 'Bone', value: 'Bone dep' },
                { text: 'Skin', value: 'Skin dep' },
            ],
            chosenHospital: '',
            chosenDepartment: '',
            selectedItem: 'Vue',
            month: '',
            day: '',
            hour: ''
        };
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
            if (this.chosenHospital === '') {
                this.$ons.notification.alert('Choose Hospital');
                return;
            } else if (this.chosenDepartment === '') {
                this.$ons.notification.alert('Choose Department');
                return;
            } else if (this.month === '') {
                this.$ons.notification.alert('Choose Month');
                return;
            } else if (this.day === '') {
                this.$ons.notification.alert('Choose Date');
                return;
            } else if (this.hour === '') {
                this.$ons.notification.alert('Choose Hour');
                return;
            } else {
                this.$ons.notification.alert('No Problem~');
                return;
            }

        }
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

select{
  text-align: center;
  width: 100%;
  height: 100%;
}

ons-button {
  margin-top: 10px;
  margin-left: 40%;
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
  margin-top: 5%;
  margin-bottom: -5%;
}

v-ons-list-header{
  width: 100%;
  text-align: center;
}

</style>