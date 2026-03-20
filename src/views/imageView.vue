<template>
  <div>
    <div class="image-view">
      <img src="@/assets/images/1.png" alt="image1">
      <img src="@/assets/images/2.png" alt="image2">
      <img src="@/assets/images/3.png" alt="image3">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.image-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>