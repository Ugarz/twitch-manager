<template>
  <div>
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