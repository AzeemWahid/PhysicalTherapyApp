<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button color="dark"> </ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-back-button color="dark" default-href="home"> </ion-back-button>
        </ion-buttons>
        <ion-title color="dark"> {{ currentRouteName }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-menu content-id="menu" type="push">
        <ion-content>
          <ion-list>
            <ion-menu-toggle>
              <router-link class="link" to="Home">
                <ion-item>Home</ion-item>
              </router-link>
              <router-link class="link" to="FindProviders">
                <ion-item>PT Providers</ion-item>
              </router-link>
              <router-link class="link" to="FindExercises">
                <ion-item>Single Exercises</ion-item>
              </router-link>
              <router-link class="link" to="FindPrograms">
                <ion-item>Exercise Programs</ion-item>
              </router-link>
              <router-link class="link" to="MyDashboard">
                <ion-item>My Dashboard</ion-item>
              </router-link>
              <router-link class="link" to="Login">
                <ion-item v-if="!loginStatus">Login</ion-item>
              </router-link>
              <router-link class="link" to="SignUp">
                <ion-item v-if="!loginStatus"> Sign Up </ion-item>
              </router-link>
              <ion-item v-if="userName">
                <ion-avatar>
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  />
                </ion-avatar>
                Logged in as {{ userName }}
              </ion-item>
              <ion-item class="link" v-if="loginStatus">
                <ion-button @click="logout"> Sign Out </ion-button>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <ion-router-outlet id="menu"> </ion-router-outlet>
    </ion-content>
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonButton,
  IonMenuButton,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonMenuToggle,
  IonBackButton
} from "@ionic/vue";
import { defineComponent } from "vue";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Home from "./views/Home";
import FindExercises from "./views/FindExercises";
import FindProviders from "./views/FindProviders";
import FindPrograms from "./views/FindPrograms";
import MyDashboard from "./views/MyDashboard";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonMenuButton,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonButton,
    IonMenuToggle,
    IonBackButton,
    SignUp,
    Login,
    Home,
    FindExercises,
    FindProviders,
    FindPrograms,
    MyDashboard
  },

  data() {
    return {
      name: "",
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    userName() {
      return this.$store.getters.getUserName;
    },
    loginStatus() {
      return this.$store.getters.getLoggedStatus;
    },
  },

  methods: {
    logout() {
      console.log("clicked");
      this.$store.commit("logout");
    },
  },
});
</script>

<style scoped>
</style>