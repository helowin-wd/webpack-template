<template>
  <h1>Hello Vue!</h1>
  <ul :class="appStyle.list">
    <li v-for="(ele, index) in arr" :key="index">{{ ele }}</li>
  </ul>
  <CountComp />
</template>

<script setup lang="ts">
import CountComp from '@/components/CountComp.vue';
import appStyle from "@/styles/app.module.css";

const arr = ['javascript', 'typescript', 'vue'].map(item => item.toUpperCase());

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_URL)
</script>
