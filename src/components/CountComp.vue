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

<style lang="scss" scoped>
.btn {
  background-color: $primaryColor;
  color: $secondaryColor;
  border: none;
  border-radius: $borderRadius;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: $backgroundColor;
  }
}
</style>
