<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button> </ion-menu-button>
        </ion-buttons>
        <ion-title> PT App </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-menu content-id="menu" type="push">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
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
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
  },
});
</script>

