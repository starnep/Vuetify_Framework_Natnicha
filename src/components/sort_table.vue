<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <template>
          <v-data-table
            :headers="headers"
            :items="fetch"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <tr>
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.username }}</td>
                <td class="text-xs-center">{{ props.item.email }}</td>
                <td class="text-xs-right">{{ props.item.address }}</td>
                <td class="text-xs-right">{{ props.item.phone }}</td>
                <td class="text-xs-center">{{ props.item.website }}</td>
                <td class="text-xs-right">{{ props.item.company }}</td>
              </tr>
            </template>
          </v-data-table>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 export default {
    data () {
      return {
        headers: [
          {text: 'ID', value:"id", align:'center'},
          {text: 'Name', value:'name', align:'center'},
          {text: 'Username', value:'username', align:'center'},
          {text: 'Email', value:'email', align:'center'},
          {text: 'Address', value:'address', align:'center'},
          {text: 'Phone', value:'phone', align:'center'},
          {text: 'Website', value:'website', align:'center'},
          {text: 'Company', value:'company', align:'left'},
        ],
        fetch: []
      }
    },methods: {
      GetFetch: function(){
          var PostsUrl = 'https://jsonplaceholder.typicode.com/users';
          this.$http.get(PostsUrl)
          .then((response)=>{
              response.data.forEach((value,key) => {
                var FullAddr = '';
                var FullComp = '';
                if(value.address.street != '' && value.address.street != undefined){
                  FullAddr += ' (street): '+value.address.street;
                }
                if(value.address.suite != '' && value.address.suite != undefined){
                  FullAddr += ' (suite): '+value.address.suite;
                }
                if(value.address.city != '' && value.address.city != undefined){
                  FullAddr += ' (city): '+value.address.city;
                }
                if(value.address.zipcode != '' && value.address.zipcode != undefined){
                  FullAddr += ' (zipcode): '+value.address.zipcode;
                }
                if(value.address.geo != '' && value.address.geo != undefined){
                  if(value.address.geo.lat != '' && value.address.geo.lat != undefined){
                    FullAddr += ' (lat): '+value.address.geo.lat;
                  }
                  if(value.address.geo.lng != '' && value.address.geo.lng != undefined){
                    FullAddr += ' (lng): '+value.address.geo.lng;
                  }
                }

                if(value.company.name != '' && value.company.name != undefined){
                  FullComp += ' (name): '+value.company.name;
                }
                if(value.company.catchPhrase != '' && value.company.catchPhrase != undefined){
                  FullComp += ' (catchPhrase): '+value.company.catchPhrase;
                }
                if(value.company.bs != '' && value.company.bs != undefined){
                  FullComp += ' (bs): '+value.company.bs;
                }
                FullAddr = FullAddr.trim()
                FullComp = FullComp.trim()
                value.address = FullAddr;
                value.company = FullComp;
              });
              this.fetch = response.data;
            },(error)=>{console.log(error);}
          );        
      }
    },
    mounted() {
      this.GetFetch();
    },
  }
</script>