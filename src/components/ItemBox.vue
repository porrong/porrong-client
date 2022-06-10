<template>
  <div class="item_box" @click.prevent="SET_OPEN_READ_MODAL(true)">
    <div v-if="this.isReleased">
      <p>{{ this.letter.content }}</p>
    </div>
    <div v-else>
      <div class="lock">
        <img src="../assets/lock.svg" />
        <p>D-DAY {{ this.letter.dday }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    letter: Object,
  },
  data() {
    return {
      isReleased: this.letter.is_released,
    };
  },
  methods: {
    ...mapMutations(["SET_OPEN_READ_MODAL"]),
  },
};
</script>

<style>
.item_box {
  position: relative;
  width: 240px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 213, 3, 0.2);
  border-radius: 10px;
  cursor: pointer;

  font-family: "Red Hat Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.lock {
  height: 79px;
}
.lock > img {
  width : 100%;
  height: 55px;
}
.lock > p {
  font-family: "Red Hat Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
}
</style>
