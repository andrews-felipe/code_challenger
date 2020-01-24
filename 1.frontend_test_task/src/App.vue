<template>
  <div class="flex__container">
    <header>
      <img src="./assets/logo.svg" width="50" alt="git search" />
      <p>Search best developers, your will love!!</p>
    </header>
    <main>
      <search></search>
      <card></card>
    </main>
  </div>
</template>

<script>
import card from "@/components/card__list.vue";
import search from "@/components/search.vue";

export default {
  components: {
    card,
    search,
 
  }
};
</script>

<style scoped>
.flex__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  animation: fade__in 600ms backwards;
  animation-delay: 500ms;
}
main {
  animation: intro__left 500ms backwards;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes fade__in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes intro__left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    transform: translateX(5);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
