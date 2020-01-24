<template>
  <div id="page">
    <!-- card wors -->
    <div id="container__spinner" v-if="stateRequest">
      <span id="first">
        <i class="fa fa-search flip"></i>
      </span>
      <span>
        <i class="fa fa-search flip"></i>
      </span>
    </div>

    <div class="container__card flex" v-else>
      <div class="card" v-for="user of users" v-bind:key="user.id" @click="openModal(user)">
        <div class="container__img">
          <img :src="user.avatar_url" alt />
        </div>
        <div class="info">
          <p class="name">{{user.login}}</p>
        </div>
      </div>
    </div>
    <modal v-if="screenModal" @hide="screenModal = false"></modal>
  </div>
</template>

<script>
import modal from "@/components/modal.vue";
export default {
  data: () => ({
    screenModal: false
  }),
  components: {
    modal
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    stateRequest() {
      return this.$store.state.stateRequest;
    }
  },
  methods: {
    openModal(user) {
      this.$store.commit("SET_CURRENT_USER", user);
      setTimeout(() => {
        this.screenModal = true;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
#page {
  display: flex;
  justify-content: center;
}
#container__spinner {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 2rem;
    color: rgb(216, 216, 216);
    animation: pulse 1s ease-in-out infinite;
  }

  #first {
    font-size: small;
    left: 48%;
  }
}

.container__card {
  animation: intro 0.2s ease-in-out forwards;
  margin: 4rem;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  align-items: flex-start;

  .card {
    width: 270px;
    background: #fff;
    overflow: hidden;
    margin: 15px;
    border-radius: 5px;
    -webkit-box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    .name {
      text-align: center;
      font-weight: 600;
    }

    .container__img {
      width: 100%;
      height: 15rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>