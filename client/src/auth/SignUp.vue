<template>
  <ion-page>
    <ion-content class="bg">
      <ion-grid class="vertical-center ion-grid-width-sm">
        <ion-row>
          <ion-col>
            <ion-card class="center-text form-width margin-auto c-bg">
              <form @submit.prevent="submitForm">
                <ion-card-header>
                  <ion-card-title> Sign Up </ion-card-title>
                </ion-card-header>

                <ion-grid>
                  <ion-card class="sub-card ion-padding-bottom">
                    <ion-row>
                      <ion-col>
                        <ion-card-subtitle>
                          Are you a patient seeking help or a physical therapy
                          provider?
                        </ion-card-subtitle> 
                      </ion-col>
                    </ion-row>

                    <ion-row class="ion-justify-content-evenly">
                      <ion-radio-group v-on:ionChange="radioValue($event)">
                        <ion-col size="4">
                          <ion-radio value="patient" class="radio"></ion-radio>
                          <ion-label class="white"> PT Patient </ion-label>
                        </ion-col>

                        <ion-col size="4">
                          <ion-radio value="provider" class="radio"></ion-radio>
                          <ion-label class="radio-label">PT Provider</ion-label>
                        </ion-col>
                      </ion-radio-group>
                    </ion-row>
                  </ion-card>
                  <p v-if="!userTypeValid">Please select a choice</p>

                  <ion-row class="ion-margin-top">
                    <ion-col>
                      <ion-card-content>
                        <ion-input
                          class="input-field-width margin-auto"
                          type="name"
                          name="name"
                          placeholder="Name"
                          v-model="name"
                          required
                        />
                        <p v-if="!nameIsValid">Please enter a valid name</p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <ion-input
                          class="input-field-width margin-auto"
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
                        <ion-input
                          class="input-field-width margin-auto"
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
                        <ion-button color="success" type="button" @click="submitForm"
                          >Submit</ion-button
                        >
                      </ion-card-content>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                <ion-card-subtitle>
                  Already have an account?
                  <router-link to="Login">
                    <ion-button color="success" class="center-btn" size="small">
                      Login
                    </ion-button>
                  </router-link>
                  instead
                </ion-card-subtitle>

                <ion-card-subtitle color="danger" v-if="accountExists">
                  An account already exists with this email, Login Instead
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
  IonLabel,
  IonCheckbox,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonInput,
  toastController,
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
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonInput,
    toastController,
  },

  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      name: "",
      email: "",
      password: "",
      patient: "",
      provider: "",
      userType: "",
      nameIsValid: true,
      pwIsValid: true,
      emailIsValid: true,
      userTypeValid: true,
      accountExists: false,
      accountCreated: "",
      accountCreatedMessage: "",
    };
  },

  methods: {
    radioValue(val) {
      this.userType = val.target.value;
      //console.log(this.userType);
    },

    submitForm() {
      this.nameIsValid = true;
      this.pwIsValid = true;
      this.emailIsValid = true;
      this.userTypeValid = true;

      if (this.name === "" || this.name.length < 2) {
        this.nameIsValid = false;
      }
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
      if (this.userType === "") {
        this.userTypeValid = false;
      }
      if (
        !this.nameIsValid ||
        !this.emailIsValid ||
        !this.pwIsValid ||
        !this.userTypeValid
      ) {
        return;
      }

      //send http request

      this.$axios
        .post(this.url + "/users/handle", {
          name: this.name,
          email: this.email,
          password: this.password,
          userType: this.userType,
        })
        .then((res) => {
          this.accountCreated = res.data.accountCreated;
          this.accountCreatedMessage = res.data.message;
          //console.log(this.accountCreated, this.accountCreatedMessage);
          this.submitformRedirect();
        });
    },

    async submitformRedirect() {
      let color;
      if (this.accountCreated) {
        color = "primary";
        this.$router.push({ path: "Home" });
        this.$store.commit("setUserType", { userType: this.userType });
        this.$store.commit("setUserName", { userName: this.name });
        this.$store.commit("setLoggedStatus", { loggedIn: true });
      } else {
        color = "vibrant";
      }

      const toast = await toastController.create({
        message: this.accountCreatedMessage,
        duration: 4000,
        color: color,
        cssClass: "toast",
      });
      toast.present();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Reggae+One&family=Roboto&display=swap");

@media only screen and (min-width: 500px) {
  .sub-card {
    width: 500px;
    margin: auto;
  }
}

.vertical-center {
  height: 100%;
  margin-top: 5vh;
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
.radio {
  vertical-align: -5px;
}

.radio-label {
  margin-left: 3px;
  color: white;
}

ion-card {
  --background: #a412cc;
}

p{
  color: #ffff00;
}

ion-input {
  --background: white;
  border-radius: 5px;
  --placeholder-color: black;
  --placeholder-opacity: 0.8;
}

ion-card-title,
ion-card-subtitle {
  --color: white;
}

ion-radio {
  --color: white;
  --color-checked: #2dd36f;
}

</style>