<template>
  <div class="clips">
    {{ clips }}
  </div>
</template>

<script>
export default {
  props: ['clips'],
};
</script>

<style lang="scss" scoped>
.clips {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 90%;
  border-radius: 1em;
  height: 100vh;
  box-shadow: #6431b1 0em 14px 1em 0px;
  color: black;
}
</style>
