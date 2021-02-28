<template>
  <ion-page>
    <ion-content class="bg">
      <ion-grid>
        <ion-row class="text-c"
          ><ion-col> <h3>Welcome to the PT App!</h3> </ion-col>
        </ion-row>
        <ion-row class="text-c">
          <ion-col class="ion-margin-bottom"> Start navigating below! </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-margin-bottom">
            <router-link class="link" to="FindExercises">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Exercise Archives </ion-card-title>
                <ion-card-content> Browse all our exercises </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col class="ion-margin-bottom">
            <router-link class="link" to="FindPrograms">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Exercise Programs </ion-card-title>
                <ion-card-content>
                  Popular exercise programs to maintain muscular health
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col
            v-if="!loginStatus || userType === 'patient'"
            class="ion-margin-bottom"
          >
            <router-link class="link" to="FindProviders">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Find your Physical Therapist </ion-card-title>
                <ion-card-content>
                  Connect with your provider
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col v-else class="ion-margin-bottom">
            <router-link class="link" to="CreateCustomPEMenu">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Create Exercises or Programs </ion-card-title>
                <ion-card-content>
                  Customize your practice to your patients' needs
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col
            v-if="!loginStatus || userType === 'patient'"
            class="ion-margin-bottom"
          >
            <router-link class="link" to="MyDashboard">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Resume your Exercise Program </ion-card-title>
                <ion-card-content> Get back to it!</ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col v-else class="ion-margin-bottom">
            <router-link class="link" to="MyDashboard">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Manage My Patients </ion-card-title>
                <ion-card-content>
                  Continue helping your customers!</ion-card-content
                >
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>
      </ion-grid>

<!-- comment 
      <button @click="log">click</button>
      <router-link to="/Exercises"> Go </router-link>
      -->
    </ion-content>  
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import MyDashboard from "../views/MyDashboard";
import FindProviders from "../views/FindProviders";
import FindPrograms from "../views/FindPrograms";
import FindExercises from "../views/FindExercises";
import CreateCustomPEMenu from "../views/CreateCustomPEMenu";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    MyDashboard,
    FindProviders,
    FindExercises,
    FindPrograms,
    CreateCustomPEMenu
  },

  computed: {
    loginStatus() {
      return this.$store.getters.getLoggedStatus;
    },
    userType() {
      return this.$store.getters.getUserType;
    },
  },

  methods: {
    log() {
      console.log(this.userType, this.loginStatus);
    },
  },
});
</script>

<style scoped>
.fill-h {
  height: 100%;
}

ion-card{
  --background: #A412CC;
  --color: white;
}

ion-card-title{
  color: white;
}
</style>