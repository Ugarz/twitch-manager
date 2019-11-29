<template>
  <div id="app">
    <transition appear name="view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style>
@import './styles/animations/view.scss';
body {
  background-color: black;
}
</style>
