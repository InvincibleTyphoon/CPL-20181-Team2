<template id="PersonalPage">
  <v-ons-page>

      <v-ons-card>
        <div class="title">
          안녕하세요 {{personName}}님!
        </div>
      </v-ons-card>
  </v-ons-page>
</template>

<script>
export default {
  name: 'PersonalPage',
  data () {
    return {
      personName: '곽대훈',
    }
  },
  methods: {
  }
};
</script>