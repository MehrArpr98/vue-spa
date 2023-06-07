<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input v-model="form.title" class="form-control" />
      <div class="form-text">{{ form.titleText }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea v-model="form.body" class="form-control"></textarea>
      <div class="form-text">{{ form.bodyText }}</div>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="loadingBool">
      <div v-if="loadingBool" class="spinner-border spinner-border-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: {
    loadingBool: Boolean,
    buttonText: String,
    post: Object
  },
  setup(props, { emit }) {
    console.log("p2:", props, props.buttonText, props.post);

    const form = reactive({
      title: "",
      body: "",
      titleText: "",
      bodyText: ""
    });

    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();
    function validate() {
      if (form.title == "") form.titleText = "required";
      else form.titleText = "";

      if (form.body == "") form.bodyText = "required";
      else form.bodyText = "";

      if (form.body != "" && form.title != "") {
        emit("formData", form);
      }
    }

    return { form, validate };
  }
};
</script>

<style>
</style>