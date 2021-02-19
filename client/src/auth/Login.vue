<template>
  <ion-page>
    <ion-content class="bg">
      <ion-grid class="vertical-center">
        <ion-row>
          <ion-col>
            <ion-card class="center-text form-width margin-auto c-bg">
              <form>
                <ion-card-header>
                  <ion-card-title> Login </ion-card-title>
                </ion-card-header>

                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          class="input-field-width"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <input
                          class="input-field-width"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </ion-card-content>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col>
                      <ion-card-content>
                        <ion-button type="submit" color="primary"
                          >Submit</ion-button
                        >
                      </ion-card-content>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                <ion-card-subtitle>
                  Already have an account?
                  <router-link to="SignUp">
                    <ion-button class="center-btn" size="small" color="primary">
                      SignUp
                    </ion-button>
                  </router-link>
                  instead
                </ion-card-subtitle>
              </form>
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
} from "@ionic/vue";
import SignUp from "./SignUp";

export default {
  components: {
    SignUp,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonPage,
  },
};
</script>

<style scoped>
.vertical-center {
  height: 100%;
  margin-top: 10vh;
}

.center-text {
  text-align: center;
}

.center-btn {
  padding-bottom: 8px;
}

.margin-auto {
  margin: auto;
}

.form-width {
  max-width: 1000px;
}

.input-field-width {
  width: 100%;
  max-width: 500px;
  border: 1px solid grey;
  border-radius: 6px;
  height: 30px;
}

form {
  padding-bottom: 20px;
}
</style>