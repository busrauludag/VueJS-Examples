<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-sm-8">
          <h1>File Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model="userData.age">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="3" class="form-control" v-model="message"></textarea>
          </div>
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail"> Send Infomail
            </label>
          </div>
          <div class="form-group">
            <label for="male">
              <input type="radio" id="male" value="Male" v-model="gender"> Male
            </label>
            <label for="female">
              <input type="radio" id="female" value="Female" v-model="gender"> Female
            </label>
          </div>
          <div class="form-group">
            <label for="priority">Priority</label>
            <select id="priority" class="form-control" v-model="selectedPriority">
              <option v-for="priority in priorities" :selected="priority == 'Medium'">{{ priority }}</option>
              <!-- v-model yoksa :selected çalışır -->
            </select>
          </div>
          <div class="form-group">
            <app-switch v-model="dataSwitch"></app-switch>
          </div>
          <button class="btn btn-primary"
                  @click.prevent="submitted">Submit!</button>
        </div>
        <div class="col-sm-4" v-if="isSubmitted">
          <br>
          <div class="card">
            <div class="card-header">
              <h4>Your Data</h4>
            </div>
            <div class="card-body">
              <p>Mail: {{ userData.email }}</p>
              <p>Password: {{ userData.password }} - {{ changePassword }}</p>
              <p>Age: {{ userData.age }}</p>
              <p style="white-space: pre">Message: {{ message }}</p>
              <p>
                <strong>Send Mail?</strong>
              </p>
              <ul>
                <li v-for="item in sendMail">{{ item }}</li>
              </ul>
              <p>Gender: {{ gender }}</p>
              <p>Priority: {{ selectedPriority }}</p>
              <p>Switched: {{ dataSwitch }}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { Switcher } from "./Switcher.vue";
  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 24
        },
        message: 'My message',
        sendMail: [],
        gender: 'Male',
        selectedPriority: 'High',
        priorities: ['High', 'Medium', 'Low'],
        dataSwitch: true,
        isSubmitted: false
      }
    },
    methods: {
      submitted(){
        this.isSubmitted = true;
      }
    },
    computed: {
      changePassword: function () {
        let arrayLength = this.userData.password.length;
        let makeStar = function () {
          let star = '';
          for (let i = 0; i < arrayLength; i++) {
            star += '*';
          }
          return star;
        }
        return this.userData.password.replace(this.userData.password, makeStar());
      }
    },
    components: {
      appSwitch: Switcher
    },
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>