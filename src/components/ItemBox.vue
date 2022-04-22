<template>
  <div class="item_box" @click.prevent='SET_OPEN_READ_MODAL(true)'>
      <div>
          <img src="../assets/lock.svg">
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations(['SET_OPEN_READ_MODAL']),
    }
  }
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
}
</style>