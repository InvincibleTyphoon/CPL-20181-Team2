<template id="MainPage">
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
import AlarmPage from './MainPages/AlarmPage.vue'
import ReservPage from './MainPages/ReservPage.vue'
import PersonalPage from './MainPages/PersonalPage.vue'
import CouncelPage from './MainPages/CouncelPage.vue'
import SettingPage from './MainPages/SettingPage.vue'

export default {
  name: 'MainPage',

  data () {
    return {
      msg: 'Hoscare',
      activeIndex: 2,
      patientInfo: null,
      tabs: [
        {
          icon: 'ion-ios-bell',
          label: '알람',
          badge: AlarmPage.methods.getNumCard(),
          page: AlarmPage,
        },
        {
          icon: 'ion-calendar',
          label: '예약',
          page: ReservPage,
        },
        {
          icon: 'ion-android-person',
          label: '개인',
          page: PersonalPage,
        },
        {
          icon: 'ion-chatbubble-working',
          label: '상담',
          page: CouncelPage,
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
    AlarmPage,
    ReservPage,
    PersonalPage,
    CouncelPage,
    SettingPage
  }
};

</script>
