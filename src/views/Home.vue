<template>
  <div>
    <button
    @click="show = !show;"
    type="button"
    class="btn btn-primary">Show !</button>
    <transition name="slide">
       <h1 v-if="show">Vue transition</h1>
    </transition>
    <p>Click wesh</p>
    <a href="https://clips-media-assets2.twitch.tv/35758059280-offset-4442.mp4">Download</a>
    <button
    @click="goCheh"
    type="button"
    class="btn btn-primary">Cheh !</button>
  </div>
</template>

<script>
import router from '../router/index';

export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    goCheh() {
      router.push({name: 'cheh', params : { name: 'Carbow' }});
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';
@import '../styles/animations/slide.scss';

a {
  border: $primary 2px solid;
  padding: .5em 1em;
  margin: 1em;
  border-radius: .5em;
  text-decoration: none;
}
a:hover {
  border: $orange 2px solid;
  color: $orange;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0e0e10;
  color: white;
  height: 100vh;
}
</style>