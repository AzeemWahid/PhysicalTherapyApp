<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="text-c"
          ><ion-col> <h4>As a PT provider, you can tailor your treatments to your patients needs</h4> </ion-col>
        </ion-row>
        <ion-row class="text-c">
          <ion-col class="ion-margin-bottom"> Start by creating a structured program consisting of different exercises, or creating a single exercise </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size-xl="4" size-lg="5" size-md="5" class="ion-margin-bottom">
            <router-link class="link" to="createprogram">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Exercise Program </ion-card-title>
                <ion-card-content>
                  Group and coordinate exercises into a program
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col size-xl="4" size-lg="5" size-md="5" class="ion-margin-bottom">
            <router-link class="link" to="createexercise">
              <ion-card class="text-c fill-h ion-padding-top">
                <ion-card-title> Single Exercise </ion-card-title>
                <ion-card-content>
                  Formulated a specialized single exercise
                </ion-card-content>
              </ion-card>
            </router-link>
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
  toastController,
} from "@ionic/vue";
import CreateExercise from '../views/components/create-exercise';
import CreateProgram from '../views/components/create-program';

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
    CreateExercise,
    CreateProgram
  },
};
</script>

<style scoped>
.fill-h{
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