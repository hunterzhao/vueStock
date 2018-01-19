<template>
<div>
  <v-app id="inspire">
  <v-container fluid grid-list-md text-md-center>
  <v-layout row wrap>
  <v-flex md2>
    <v-navigation-drawer permanent light height="600%">
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
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/Factor">特征因子</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile>    
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/Plate">板块联动</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</v-flex>
<v-flex md10>
     <v-card dark color="yellow">
         <router-view></router-view>
    </v-card>
</v-flex>
</v-layout>
    </v-container>
  </v-app>
</div>
</template>
<script>
export default{
    data () {
        return {
          items: [
            { title: '特征因子', icon: 'dashboard', path: '/Factor' },
            { title: '板块联动', icon: 'question_answer', path: '/Plate'}
          ]
        }
    }
}
</script>
<style>
    li a {
        text-decoration: none;
    }

    body {
        background-color: #f7f8f9;
    }
</style>