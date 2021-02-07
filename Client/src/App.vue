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
      <ion-content>
        <ion-list>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
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

