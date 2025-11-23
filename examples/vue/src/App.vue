<script setup lang="ts">
import { useForm } from './use-form';

const form = useForm({
  defaultValues: {
    name: 'John Doe',
    age: 30,
    // email: 'john.doe@example.com',
    // password: 'password',
    // confirmPassword: 'password',
    // acceptTerms: false,
    // acceptMarketing: false,
    // acceptPrivacy: false,
    // aad: {
    //   bbb: 'bbb',
    // },
  },
  resolver: async (values) => {
    const errors: any = {}
    if (!values.name)
      errors.name = { type: 'required', message: 'Name is required' }
    return {
      values,
      errors,
    }
  }
})


function submit(data: any) {
  console.log(data)
}
</script>

<template>
  <form @submit="form.handleSubmit(submit)($event)">
    <input v-bind="form.register('name')" />
    {{ form.state.fields.name }}
    <!-- <input v-bind="form.register('age')" /> -->
    <!-- <input v-bind="form.register('email')" /> -->
    <!-- <input v-bind="form.register('password')" /> -->
    <!-- <input v-bind="form.register('confirmPassword')" /> -->
    <!-- <input v-bind="form.register('acceptTerms')" /> -->
    <!-- <input v-bind="form.register('acceptMarketing')" /> -->
    <!-- <input v-bind="form.register('acceptPrivacy')" /> -->
    <div @click="form.trigger('name')">Submit</div>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
