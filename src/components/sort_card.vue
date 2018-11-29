<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
          <template>
            <v-card v-for="row in fetch" :key="row.id" class="rounded-card mt-4">
                <v-container primary class="white--text">
                    <label class="body-2">{{ row.title }}</label>
                </v-container>

                <v-card-text>
                    <label class="caption">{{ row.body }}</label>
                </v-card-text>
                <v-card-text>
                    <label class="caption">By: {{ row.username }}</label>
                </v-card-text>
            </v-card>
        </template>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
      return { fetch: [] }
    },methods: {
    GetFetch: function(){
        var PostsUrl = 'https://jsonplaceholder.typicode.com/posts';
        this.$http.get(PostsUrl).then((response1)=>{
            var PostsUrl = 'https://jsonplaceholder.typicode.com/users';
            this.$http.get(PostsUrl).then((response2)=>{
                response1.data.forEach((value1,key1) => {
                    response2.data.forEach((value2,key2) => {
                        if(value1.userId == value2.id){
                            value1['username'] = value2.username
                        }
                    });
                });
                this.fetch = response1.data;
            },
            (error)=>{console.log(error);
            });
        },
        (error)=>{console.log(error);
        });     
      }
    },
    mounted() {
      this.GetFetch();
    },
}
</script>
<style>
    .rounded-card{border-color: black !important; border: 1px solid;border-radius: 10px;}
</style>