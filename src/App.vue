<template>
  <h1>Hello Vue!</h1>
  <ul :class="appStyle.list">
    <li v-for="(ele, index) in arr" :key="index">{{ ele }}</li>
  </ul>
  <CountComp />
  <ImageView />
  <br />
  <ul>
    <li class="iconfont">&#xea86;</li>
  </ul>
</template>

<script setup lang="ts">
import CountComp from '@/components/CountComp.vue';
import appStyle from "@/assets/styles/app.module.css";
import ImageView from '@/views/imageView.vue';

const arr = ['javascript', 'typescript', 'vue'].map(item => item.toUpperCase());

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_URL)
</script>

<style lang="scss" scoped>
.list {
  color: #fff;
}
</style>
