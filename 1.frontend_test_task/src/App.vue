<template>
  <div class="flex__container">
    <header>
      <img src="./assets/slogan.svg" alt="git search" />
    </header>
    <main>
      <search></search>
      <card></card>
    </main>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import search from "@/components/search.vue";

export default {
  components: {
    card,
    search
  }
};
</script>

<style>
.flex__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
