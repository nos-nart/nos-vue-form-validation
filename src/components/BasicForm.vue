<template>
  <form class="my-12" :style="{'width': '300px'}" @submit.prevent="handleSubmit">
    <p class="text-center font-bold text-xl">Basic form</p>
    <div class="p-6 flex flex-col justify-center">
      <div class="flex flex-col items-start">
        <label class="text-xs" for="name">name</label>
        <input 
          :style="{'border-color': $v.form.name.$error ? '#f56565' : ''}"
          v-model="$v.form.name.$model"
          class="input"
          type="text">
      </div>
      <p v-if="!$v.name.required" class="text-xs text-red-500">name is required</p>
      <div class="flex flex-col items-start mt-4">
        <label class="text-xs" for="age">age</label>
        <input class="input" type="text">
      </div>
      <button class="w-24 mt-4 focus:outline-none px-2 py-1 text-xs bg-green-500 text-white rounded" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { required, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: '',
        age: ''
      }
    }
  },
  validations: {
    name: {
      required,
    },
    age: {
      required,
      between: between(20, 30)
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (this.$v.form.$error) return
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  @apply border border-solid border-gray-400 px-3 py-1 rounded outline-none;
}
</style>