<template>
  <div class="container">
    <form id="my-form" action="#" class="dropzone"></form>
  </div>
</template>

<script>
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

export default {
  name: "Dropzone",

  data() {
    return {};
  },

  methods: {
    attach() {
      Dropzone.autoDiscover = false;
      let myDropzone = new Dropzone("#my-form", {
        maxFiles: 3,
        paramName: 'imgs',
        maxFilesize: 1,
      });
 
      myDropzone.on("addedfile", (file) => {
        console.log(`File added: ${file.name}`);
      });
      myDropzone.on("maxfilesexceeded", (file) => {
        console.log("maxfilesreached");
        myDropzone.removeFile(file);
      });
    },
  },

  created() {},

  mounted() {
    this.drop = this.attach();
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}
</style>