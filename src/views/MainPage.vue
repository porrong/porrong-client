<template>
  <div class="container">
    <div id="logo">
      <img src="../assets/logo.svg" />
    </div>
    <div id="withdrawal" @click="deleteUser">
      <p>탈퇴하기</p>
    </div>
    <div class="itemContainer">
      <WriteItemBox/>
      <ItemBox v-for="data in totalElements" :key="data"/>
    </div>
  </div>
  <write-letter-modal />
  <read-letter-modal/>
</template>

<script>
import WriteItemBox from "../components/WriteItemBox.vue";
import ItemBox from "../components/ItemBox.vue";
import WriteLetterModal from "../components/WriteLetterModal.vue";
import ReadLetterModal from "../components/ReadLetterModal.vue";
import axios from 'axios';
import { mapState, mapMutations } from 'vuex'
import router from '@/router';

export default {
  components: {
    WriteItemBox,
    ItemBox,
    WriteLetterModal,
    ReadLetterModal
  },
  computed: {
    ...mapState(['letters', 'totalElements'])
  },
  mounted() {
    axios.get(axios.defaults.baseURL + '/letter', {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        }
    }).then((res) => {
      console.log(res.data);

      this.SET_TOTAL_ELEMENTS(res.data.total_elements);
      this.SET_LETTERS(res.data.letters);
    })

    if(localStorage.getItem("access-token") == null) {
      router.push('/');
      alert('로그인이 필요합니다');
    }
  },
  methods: {
    ...mapMutations(['SET_TOTAL_ELEMENTS', 'SET_LETTERS']),
    deleteUser() {
      axios.delete(axios.defaults.baseURL + '/user', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        }
      }).then((res) => {
        console.log(res.data);
        router.push('/');
        alert('회원 정보가 삭제되었습니다.');
        localStorage.clear;
      }).catch(err => {
        alert('회원탈퇴를 할 수 없습니다.');
        console.log(err)
      })
    },
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
