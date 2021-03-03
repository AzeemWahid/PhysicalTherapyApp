<template>
  <div class="container">
    <form id="my-gif-form" action="#" class="dropzone"></form>
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
      let myDropzone = new Dropzone("#my-gif-form", {
        maxFiles: 1,
        paramName: "gif",
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
  width: 200px;
}

</style>