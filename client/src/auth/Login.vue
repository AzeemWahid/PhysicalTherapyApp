<template>
  <ion-page>
    <ion-content class="bg">
      <ion-grid class="vertical-center">
        <ion-row>
          <ion-col>
            <ion-card class="center-text form-width margin-auto c-bg">
              <form @submit.prevent="submitForm">
                <ion-card-header>
                  <ion-card-title> Login </ion-card-title>
                </ion-card-header>

                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          v-model="email"
                          class="input-field-width"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                        <p v-if="!emailIsValid">
                          Please enter a valid email address
                        </p>
                        <p v-if="!loginAttempt && emailIsValid">
                          {{ loginEmailMessage }}
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          v-model="password"
                          class="input-field-width"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <p v-if="!pwIsValid">Please enter a valid password</p>
                        <p v-if="!loginAttempt && pwIsValid">
                          {{ loginPwMessage }}
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <ion-button @click="login" type="submit" color="primary"
                          >Submit</ion-button
                        >
                      </ion-card-content>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                <ion-card-subtitle>
                  Already have an account?
                  <router-link to="SignUp">
                    <ion-button class="center-btn" size="small" color="primary">
                      SignUp
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
  toastController,
} from "@ionic/vue";
import SignUp from "./SignUp";

export default {
  components: {
    SignUp,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonPage,
    toastController,
  },

  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      name: "",
      email: "",
      password: "",
      pwIsValid: true,
      emailIsValid: true,
      loginAttempt: "",
      loginEmailMessage: "",
      loginPwMessage: "",
      loginMessage: "",
    };
  },

  methods: {
    login() {
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

      if (!this.emailIsValid || !this.pwIsValid) {
        return;
      }

      this.$axios
        .post(this.url + "/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.loginAttempt = res.data.loginAttempt;
          this.loginMessage = res.data.loginMessage;
          this.loginEmailMessage = res.data.loginEmailMessage;
          this.loginPwMessage = res.data.loginPwMessage;
          this.name = res.data.userName;
          this.loginFormRedirect();
          //console.log(this.loginAttempt, this.loginMessage, this.name);
        });
    },

    async loginFormRedirect() {
      let color;
      if (this.loginAttempt) {
        color = "primary";
        this.$router.push({ path: "Home" });
        this.$store.commit("setUserName", { userName: this.name });
        this.$store.commit("setLoggedStatus", { loggedIn: true });
      }
      
      if (this.loginMessage != undefined) {
        const toast = await toastController.create({
          message: this.loginMessage,
          duration: 4000,
          color: color,
          cssClass: "toast",
        });
        toast.present();
      }
    },
  },
};
</script>

<style scoped>
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