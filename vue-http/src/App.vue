<template>
  <div class="container">
    <h3>HTTP</h3>
    <div class="form-group">
      <label for="">Username</label>
      <input type="text" name="username" class="form-control" v-model="user.username">
    </div>
    <div class="form-group">
      <label for="">Mail</label>
      <input type="text" name="mail" class="form-control" v-model="user.email">
    </div>
    <button class="btn btn-primary" @click="submit">Submit</button>
    <hr>
    <input type="text" class="form-control" v-model="node">
    <button class="btn btn-info" @click="fetchData">Get Data</button>
    <br>
    <br>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">{{ user.username }} / {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
        // console.log(this.user);
        // data.json ile firebase'te proje adı altında data objesini oluşturur ve verileri altında listeler

        // this.$http.post('data.json', this.user)
        //     .then(res => {
        //       console.log(res);
        //     }, err => {
        //       console.log(err);
        //     });

        // .get() method:GET, .save() method:POST, .query() method:GET, .update() method:PUT, 
        // .remove() method:DELETE, .delete() method:DELETE
        // this.resource.save({}, this.user);

        // custom resource
        this.resource.saveAlt(this.user);

      },
      fetchData() {
        // this.$http.get('data.json')
        //     .then(res => {
        //       // datayı javascript objeye çevirir
        //       // fakat bu şekilde kullanırsak bize promise döner, o yüzden burada öncelikle return etmeliyiz
        //      return res.json();
        //     }).then(data => {
        //       const resultArray = [];
        //       for (let key in data){
        //         resultArray.push(data[key]);
        //       }
        //       this.users = resultArray;
        //     });

        this.resource.getData({ node: this.node })
          .then(res => {
            return res.json();
          }).then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          });
      }
    },
    created() {
      const customActions = {
        saveAlt: { method: 'POST', url: 'alternative.json' },
        getData: { method: 'GET' }
      };
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>