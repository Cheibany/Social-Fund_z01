<template>
  <div id="app">
    <login-modal></login-modal>
  </div>
</template>

<script>
import LoginModal from './components/Login.vue';

export default {
  name: 'App',
  components: {
    LoginModal
  }
}
</script>
