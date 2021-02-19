<template>
  <ion-page>
    <ion-content class="bg">
      <ion-grid class="vertical-center">
        <ion-row>
          <ion-col>
            <ion-card class="center-text form-width margin-auto c-bg">
              <form @submit.prevent="submitForm">
                <ion-card-header>
                  <ion-card-title> Sign Up </ion-card-title>
                </ion-card-header>

                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          class="input-field-width"
                          type="name"
                          name="name"
                          placeholder="Name"
                          v-model="name"
                        />
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          class="input-field-width"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          v-model.trim="email"
                        />
                        <p v-if="!emailIsValid">
                          Please enter a valid email address
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          class="input-field-width"
                          type="password"
                          name="password"
                          placeholder="Password"
                          v-model.trim="password"
                        />
                        <p v-if="!pwIsValid">
                          Please enter a valid password that is at least 6
                          characters long
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <ion-button
                          type="button"
                          color="primary"
                          @click="submitForm"
                          >Submit</ion-button
                        >
                      </ion-card-content>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                <ion-card-subtitle>
                  Already have an account?
                  <router-link to="Login">
                    <ion-button class="center-btn" size="small" color="primary">
                      Login
                    </ion-button>
                  </router-link>
                  instead
                </ion-card-subtitle>
              </form>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonPage,
} from "@ionic/vue";
import Login from "./Login";

export default {
  components: {
    Login,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonPage,
  },

  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      name: "",
      email: "",
      password: "",
      formIsValid: true,
      pwIsValid: true,
      emailIsValid: true,
    };
  },

  methods: {
    submitForm() {
      this.formIsValid = true;
      this.pwIsValid = true;
      this.emailIsValid = true;

      if (
        this.email === "" ||
        !this.email.includes("@") ||
        !this.email.includes(".com")
      ) {
        this.emailIsValid = false;
      }
      if (this.password === "" || this.password.length < 6) {
        this.pwIsValid = false;
      }
      if (!this.emailIsValid || !this.formIsValid) {
        this.formIsValid = false;
        return;
      }

      //send http request

     console.log("url ", this.url);

      this.$axios
        .post(this.url + '/users/handle', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => console.log(res));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Reggae+One&family=Roboto&display=swap");

.vertical-center {
  height: 100%;
  margin-top: 10vh;
}

.center-text {
  text-align: center;
}

.center-btn {
  padding-bottom: 8px;
}

.margin-auto {
  margin: auto;
}

.form-width {
  max-width: 1000px;
}

.input-field-width {
  width: 100%;
  max-width: 500px;
  border: 1px solid grey;
  border-radius: 6px;
  height: 30px;
}

form {
  padding-bottom: 20px;
}
</style>