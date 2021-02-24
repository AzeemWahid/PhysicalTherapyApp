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
          <ion-item>Patients</ion-item>
          <ion-item>Providers</ion-item>
          <ion-item>Accounts</ion-item>
          <ion-item>blank</ion-item>
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
} from "@ionic/vue";
import { defineComponent } from "vue";

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
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
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