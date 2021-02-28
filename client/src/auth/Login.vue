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
                        <ion-input
                          v-model="email"
                          class="input-field-width margin-auto"
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
                        <ion-input
                          class="input-field-width margin-auto"
                          v-model="password"
                          type="password"
                          name="password"
                          placeholder="Password"
                        >
                        </ion-input>
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
                        <ion-button color="success" @click="login" type="submit"
                          >Submit</ion-button
                        >
                      </ion-card-content>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                <ion-card-subtitle>
                  Already have an account?
                  <router-link to="SignUp">
                    <ion-button color="success" class="center-btn" size="small">
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
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
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
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
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
      userType: "",
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

      console.log(this.email, this.password);

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
          this.userType = res.data.userType;
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
        this.$store.commit("setUserType", { userType: this.userType });
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
p {
  color: yellow;
}

ion-card {
  --background: #a412cc;
}

ion-card-title,
ion-card-subtitle {
  --color: white;
}

ion-input {
  --background: white;
  border-radius: 5px;
  --placeholder-color: black;
  --placeholder-opacity: 0.8;
  height: 35px;
}
</style>