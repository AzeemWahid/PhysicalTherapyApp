<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="text-c">
          <ion-col> <h3>Find PT Providers</h3> </ion-col>
        </ion-row>
        <ion-row class="text-c">
          <ion-col>
            <ion-searchbar placeholder="Search by name or email"> </ion-searchbar>
          </ion-col>
        </ion-row> </ion-grid
    ></ion-content>
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
  toastController,
} from "@ionic/vue";

export default {
  components: {
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
    toastController,
  },
};
</script>

<style scoped>
@media only screen and (min-width: 500px) {
  ion-searchbar {
    width: 500px;
    margin: auto;
  }
}
</style>