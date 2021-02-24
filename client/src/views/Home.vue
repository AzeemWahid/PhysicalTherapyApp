<template>
  <ion-page>
    <ion-content class="bg">
      <ion-button color="warning">Danger</ion-button>
      <ion-button color="danger">Danger</ion-button>
      <h2>asd {{ $store.state.counter }}</h2>
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

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
});
</script>

<style scoped>
</style>