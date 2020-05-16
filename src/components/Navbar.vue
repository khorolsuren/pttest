<template>
  <v-card class="hidden">
    <v-app-bar
      absolute
      color="#D32F2F"
      dark
      shrink-on-scroll
      prominent
      src="/logo.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3">

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(170,60,60,.5), rgba(25,32,72,.3)"></v-img>
      </template>

    <v-app-bar-nav-icon class="gray--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>FULLOUT</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>DATABASE</v-tab>
          <v-tab>HEATMAP</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>

      <v-list rounded>

        <v-list-item>
          <v-list-item-avatar>
          <v-img src="/dashboard.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
          <v-list-item-title>株式会社フルアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>

        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
       </v-list-item>
      </v-list>
    </v-navigation-drawer>

      <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="650">
        <v-container style="height: 1800px;"></v-container>
      </v-sheet>

   </v-card>
  </template>

<script>


export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'fas fa-tachometer-alt', text: 'Dashboard', route: '/' },
        { icon: 'fas fa-chart-bar', text: 'Chart', route: '/chart' },
        { icon: 'fas fa-link', text: 'Links', route: '/link' },
      ]
    }
  }
}
</script>
