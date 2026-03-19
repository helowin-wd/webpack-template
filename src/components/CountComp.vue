<template>
  <div class="home">
    <h2>home</h2>
    <p>count: {{ count }}</p>
    <button class="btn" @click="count++">点击</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

</script>

<style lang="less" scoped>
.btn {
  background-color: #4f9cff;
  color: #5c5c5c;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: darken(#ffffff, 5%);
  }
}
</style>
