<template>
  <div>
    <p>Click wesh</p>
    <button
    @click="goCheh"
    type="button"
    class="btn btn-primary">Primary</button>
  </div>
</template>

<script>
import router from '../router/index';

export default {
  methods: {
    goCheh() {
      router.push({name: 'cheh', params : { name: 'Carbow' }});
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightcoral;
  color: white;
  height: 100vh;
}
</style>