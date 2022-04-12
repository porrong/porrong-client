<template>
  <div class="container">
    <div id="logo">
      <img src="../assets/logo.svg" />
    </div>
    <div id="withdrawal">
      <p>탈퇴하기</p>
    </div>
    <div class="itemContainer">
      <WriteItemBox>
        <WriteLetterModal/>
      </WriteItemBox>
      <ItemBox v-for="data in 10" :key="data">

      </ItemBox>
    </div>
  </div>
  <write-letter-modal />
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import WriteItemBox from "../components/WriteItemBox.vue";
import ItemBox from "../components/ItemBox.vue";
import WriteLetterModal from "../components/WriteLetterModal.vue";

export default {
  components: {
    WriteItemBox,
    ItemBox,
    WriteLetterModal
  },
  computed: {
    ...mapState({
      'isShowModal' : true
    })
  },
  methos: {
    ...mapMutations({
      SET_OPEN_MODAL: 'SET_OPEN_MODAL'
    })
  }
};
</script>

<style>
.container {
  position: absolute;
  width: 765px;
  height: 532px;
}
#logo {
  margin: 0 auto;
  width: 56px;
}
#withdrawal {
  float: right;
  font-family: "Roboto";
  font-size: 11px;
  line-height: 12px;
  text-decoration-line: underline;

  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.itemContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 440px;
  gap: 15px;
  overflow: auto;
}
.itemContainer::-webkit-scrollbar {
  width: 5px; /* 스크롤바의 너비 */
}

.itemContainer::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #fab000; /* 스크롤바의 색상 */

  border-radius: 10px;
}

.itemContainer::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  border-radius: 10px;
}
</style>
