<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button color="dark"> </ion-menu-button>
        </ion-buttons>
        <ion-title color="dark"> {{ currentRouteName }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-menu content-id="menu" type="push">
        <ion-content>
          <ion-list>
            <ion-menu-toggle>
              <ion-item>PT Providers</ion-item>
              <ion-item>Exercises</ion-item>
              <router-link class="link" to="Login">
                <ion-item v-if="!loginStatus">Login</ion-item>
              </router-link>
              <router-link class="link" to="SignUp">
                <ion-item v-if="!loginStatus">Sign Up</ion-item>
              </router-link>
              <ion-item v-if="userName">
                <ion-avatar>
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  />
                </ion-avatar>
                Logged in as {{ userName }}
              </ion-item>
              <ion-item class="link" v-if="loginStatus"> Sign Out</ion-item>
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
  IonMenuButton,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonMenuToggle
} from "@ionic/vue";
import { defineComponent } from "vue";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";

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
    IonMenuToggle,
    SignUp,
    Login,
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
    open() {
      alert("opening");
    },
  },
});
</script>

<style scoped>

</style>