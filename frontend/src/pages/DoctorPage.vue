<template id="DoctorPage">
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$emit('toggleMenu')">
          <v-ons-icon icon="fa-bars"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import InquirePage from './DoctorPages/InquirePage.vue'
import SettingPage from './DoctorPages/SettingPage.vue'
import PersonalPage from './DoctorPages/PersonalPage.vue'
export default {
  name: 'DoctorPage',

  data () {
    return {
      msg: 'Hoscare',
      activeIndex: 1,
      doctorInfo: null,
      tabs: [
        {
          icon: 'ion-calendar',
          label: '예약',
          page: InquirePage,
        },
        {
          icon: 'ion-android-person',
          label: '개인',
          page: PersonalPage,
        },
        {
          icon: 'ion-gear-a',
          label: '설정',
          page: SettingPage,
        }
      ],
    }

  },

  methods: {
    
  },

  components: {
    InquirePage,
    PersonalPage,
    SettingPage
  }
};

</script>
