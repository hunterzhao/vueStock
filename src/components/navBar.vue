<template>
<div>
  <v-app id="inspire">
    <v-navigation-drawer permanent light>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click="routeTo(item.path)">
          <router-link to="/Factor">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</div>
</template>

<script>
export default{
    name: 'navBar',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', path: '/factor'},
          { title: 'About', icon: 'question_answer', path: '/plate' }
        ]
      }
   },
    methods: {
        routeTo(link) {
            
        }
    }
}
</script>