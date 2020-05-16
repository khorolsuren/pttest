<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>Copyright ©  Full Out Co., Ltd.</v-footer>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>
