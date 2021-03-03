<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="text-c">
          <ion-col> <h3>Create a Specialized Exercise</h3> </ion-col>
        </ion-row>

        <ion-row class="text-c">
          <ion-col>
            <ion-card class="center-text form-width margin-auto">
              <form @submit.prevent="submitExercise">
                <ion-card-header>
                  <ion-card-title> Exercise Details </ion-card-title>
                </ion-card-header>

                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Name your exercise
                        </ion-card-subtitle>
                        <ion-input
                          v-model="exerciseName"
                          class="input-field-width margin-auto"
                          type="text"
                        />
                        <p v-if="!exerciseNameIsValid">
                          Please enter a valid name
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content class="ion-padding-top">
                        <ion-button @click="submitExercise" color="success">
                          Create
                        </ion-button>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Target body area of exercise
                        </ion-card-subtitle>
                        <ion-input
                          v-model="exerciseArea"
                          class="input-field-width margin-auto"
                          type="text"
                          required
                        />
                        <p v-if="!exerciseAreaIsValid">
                          Please enter a valid target area
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Describe what the exercise accomplishes
                        </ion-card-subtitle>
                        <ion-textarea
                          v-model="description"
                          class="input-field-width margin-auto"
                          autocapitalize
                          type="text"
                          maxlength="80"
                          placeholder="Max 100 characters, min 50 characters"
                          required
                          spellcheck
                        >
                        </ion-textarea>
                        <p v-if="!descriptionIsValid">
                          Please enter a valid description
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Explain how the exercise is performed
                        </ion-card-subtitle>
                        <ion-textarea
                          v-model="perform"
                          class="input-field-width margin-auto"
                          autocapitalize
                          type="text"
                          maxlength="200"
                          placeholder="Max 200 characters, min 100 characters"
                          required
                          spellcheck
                        >
                        </ion-textarea>
                        <p v-if="!performIsValid">
                          Please enter valid instructions
                        </p>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Highlight any precautions to be taken
                        </ion-card-subtitle>
                        <ion-textarea
                          v-model="precautions"
                          class="input-field-width margin-auto"
                          autocapitalize
                          type="text"
                          maxlength="80"
                          placeholder="Max 100 characters"
                          required
                          spellcheck
                        >
                        </ion-textarea>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Sets to be performed
                        </ion-card-subtitle>
                        <ion-range
                          v-model="sets"
                          v-on:ionChange="getSetsVal"
                          color="vibrant"
                          min="0"
                          max="10"
                          snaps
                          ticks
                        >
                          <ion-label color="light" slot="start">0</ion-label>
                          <ion-label color="light" slot="end">10</ion-label>
                        </ion-range>
                        <ion-card-subtitle
                          color="vibrant"
                          v-if="getSetsVal > 0"
                        >
                          {{ getSetsVal }} sets
                        </ion-card-subtitle>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Number of repititions
                        </ion-card-subtitle>
                        <ion-range
                          v-model="reps"
                          v-on:ionChange="getRepsVal"
                          color="vibrant"
                          min="0"
                          max="15"
                          snaps
                          ticks
                        >
                          <ion-label color="light" slot="start">0</ion-label>
                          <ion-label color="light" slot="end">15</ion-label>
                        </ion-range>
                      </ion-card-content>
                      <ion-card-subtitle
                        class="ion-padding-bottom"
                        color="vibrant"
                        v-if="getRepsVal > 0"
                      >
                        {{ getRepsVal }} reps
                      </ion-card-subtitle>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-col>
                      <ion-card-content>
                        <ion-card-subtitle class="ion-padding-bottom">
                          Specify duration of exercise course
                        </ion-card-subtitle>
                        <ion-select class="margin-auto" value="Days">
                          <ion-select-option value="Days">
                            Days
                          </ion-select-option>
                          <ion-select-option value="Weeks">
                            Weeks
                          </ion-select-option>
                          <ion-select-option value="Months">
                            Months</ion-select-option
                          >
                        </ion-select>
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-bottom">
                    <ion-card class="sub-card margin-auto">
                      <ion-card-title class="ion-padding-topj">
                        Image Uploads
                      </ion-card-title>
                      <ion-col>
                        <ion-card-content>
                          <ion-card-subtitle class="ion-padding-bottom">
                            Upload up to 3 exercise images here
                          </ion-card-subtitle>
                          <ImgUploader/>
                        </ion-card-content>
                      </ion-col>

                      <ion-col>
                        <ion-card-content class="margin-auto">
                          <ion-card-subtitle class="ion-padding-bottom">
                            Upload an exercise GIF image here
                          </ion-card-subtitle>
                          <GifUploader/>
                        </ion-card-content>
                      </ion-col>
                    </ion-card>
                  </ion-row>
                </ion-grid>
              </form>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <div id="drag-drop-area"></div>
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
  IonSelect,
  IonSelectOption,
  IonRange,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  toastController,
} from "@ionic/vue";
/*
import { camera, trash, close } from "ionicons/icons";
import { usePhotoGallery } from "@/composables/usePhotoGallery"; */
import ImgUploader from '../components/img-uploader';
import GifUploader from '../components/gif-uploader';

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
    IonSelect,
    IonSelectOption,
    IonRange,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    toastController,
    ImgUploader,
    GifUploader
  },

  /*
  setup() {
    const { takePhoto } = usePhotoGallery();

    return {
      takePhoto,
      camera,
      trash,
      close,
    };
  },
*/
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      exerciseName: "",
      exerciseArea: "",
      description: "",
      perform: "",
      precautions: "",
      sets: 0,
      reps: 0,
      exerciseNameIsValid: true,
      exerciseAreaIsValid: true,
      descriptionIsValid: true,
      performIsValid: true,
    };
  },


  computed: {
    getSetsVal() {
      return this.sets;
    },
    getRepsVal() {
      return this.reps;
    },
  },

  methods: {
    uploadImages() {},

    uploadGif() {
      this.$axios.post(this.url + "/exercises/uploadgif", {});
    },

    submitExercise() {
      //validate

      //validate exercise name
      if (this.exerciseName != "" || this.exerciseName.length < 2) {
        this.exerciseNameIsValid = false;
      }

      //validate exercise area
      if (this.exerciseArea != "" || this.exerciseArea.length < 2) {
        this.exerciseAreaIsValid = false;
      }

      //validate description
      if (this.description != "" || this.description.length < 60) {
        this.descriptionIsValid = false;
      }

      //validate performing
      if (this.perform != "" || this.perform.length < 100) {
        this.performIsValid = false;
      }

      //post
      console.log("submit");
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 500px) {
  ion-searchbar {
    width: 500px;
    margin: auto;
  }

  .sub-card {
    width: 500px;
    margin: auto;
  }
}

p {
  color: yellow;
}

.file {
  max-width: 220px;
  margin: auto;
  height: 40px;
}

ion-card {
  --background: #a412cc;
}

ion-card-title,
ion-card-subtitle {
  --color: white;
}

ion-select {
  background-color: white;
  width: 100%;
  max-width: 200px;
  border-radius: 5px;
}

ion-input {
  --background: white;
  border-radius: 5px;
  --placeholder-color: black;
  --placeholder-opacity: 0.8;
  height: 35px;
}

ion-textarea {
  --background: white;
  border-radius: 5px;
  --placeholder-color: black;
  --placeholder-opacity: 0.8;
}

.container {
  border: 1px solid black;
}
</style>