<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="text-c">
          <ion-col> <h3>Create a Specialized Exercise</h3> </ion-col>
        </ion-row>

        <ion-row class="text-c">
          <ion-col>
            <ion-card>
              <form></form>
              <ion-card-header>
                <ion-card-title> Exercise Details </ion-card-title>
              </ion-card-header>

              <ion-grid>

                <ion-row>
                  <ion-col>
                    <ion-card-content>
                      <ion-card-subtitle class="ion-padding-bottom">  Name your exercise </ion-card-subtitle> 
                      <ion-input
                        v-model="exerciseName"
                        class="input-field-width"
                        type="name"
                      />
                    </ion-card-content>
                  </ion-col>
                </ion-row>

                <ion-row>
                  <ion-col>
                    <ion-card-content>
                      <ion-card-subtitle class="ion-padding-bottom">  Name your exercise </ion-card-subtitle> 
                      <ion-input
                        v-model="exerciseName"
                        class="input-field-width"
                        type="name"
                      />
                    </ion-card-content>
                  </ion-col>
                </ion-row>

              </ion-grid>


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
  IonTextarea,
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
    IonInput,
    IonTextarea,
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

ion-card {
  --background: #a412cc;
}

ion-card-title,
ion-card-subtitle {
  --color: white;
}


ion-input {
  --background: white;
  border-radius: 5px;
  --placeholder-color: black;
  --placeholder-opacity: 0.8;
  height: 35px;
}
</style>