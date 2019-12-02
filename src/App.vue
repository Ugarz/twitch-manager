<template>
  <div id="app">
    <transition name="view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style>
.view-enter-active,
.view-leave-active {
  transition: opacity .3s;
}
.view-enter,
.view-leave-to /* .view-leave-active below version 2.1.8 */ {
  opacity: .7;
}
</style>
