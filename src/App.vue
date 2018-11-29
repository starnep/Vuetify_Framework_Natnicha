<template>
  <v-app>

    <v-toolbar>
      <v-toolbar-title>PAI DUAY KAN MAI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router-link to="/table">Table</v-btn>
        <v-btn flat router-link to="/card">Card</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="hidden-md-and-up">
      <v-container fluid >
      <v-expansion-panel>
        <v-expansion-panel-content >
            <div slot="header">
              <v-card-text class="nav-item" to="/">PAI DUAY KAN MAI</v-card-text>
            </div>
            <v-card>
              <v-btn style="width:100%;margin:unset" flat router-link to="/table">Table</v-btn>
            </v-card>
            <v-card>
              <v-btn style="width:100%;margin:unset" flat router-link to="/card">Card</v-btn>
            </v-card>   
          
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-container>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer fixed class="pa-3">
      <v-spacer></v-spacer>
      <div>
        <label>@2018 - </label>
        <label style="font-weight:bold">Natnicha Thitsuksai</label>
      </div>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  // name: 'App',
  // components: {
  //   SortTable,
  //   SortCard,
  // }
}
</script>
