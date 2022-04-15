<template>
  <div class="item_box" @click.prevent="SET_OPEN_WRITE_MODAL(true)">
    <div class="image">
      <img src="../assets/letterpaper.svg"/>
    </div>
    <p class="write">작성하기</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations(['SET_OPEN_WRITE_MODAL'])
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
.image {
  margin: 0 auto;
  width: 96px;
  height: 84px;
  left: 385.54px;
  top: 197px;
  position: absolute;
  left: 60px;
  top: 0;

  opacity: 0.3;
  transform: rotate(15.57deg);
}
.write {
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: rgba(119, 74, 0, 0.8);
}
</style>
