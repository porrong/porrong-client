<template>
  <div class="item_box" @click.prevent="SET_OPEN_MODAL(true)"/>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations(['SET_OPEN_MODAL'])
    }
  }
</script>

<style>
.item_box {
  width: 240px;
  height: 120px;

  background: rgba(255, 213, 3, 0.2);
  border-radius: 10px;
  cursor: pointer;
}
</style>
