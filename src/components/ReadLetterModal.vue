<template>
  <transition name="modal">
    <div class="box" v-if="isShowReadLetterModal">
      <div class="letter_box">
        <div class="date">
          <p>작성일 : {{ createdAt }}</p>
          <br />
          <p>개봉가능일 : {{ releaseDate }}</p>
        </div>
        <img src="../assets/exportemail.svg" class="exportemail_image" />
        <img
          src="../assets/trashcan.svg"
          class="trashcan_image"
          @click.prevent="deleteLetter"
        />
        <div class="dear">
          <p>DEAR. {{ dear }}</p>
        </div>
        <div class="content_box">
          <div id="content">
            {{ content }}
          </div>
        </div>
        <div class="close_button" @click.prevent="SET_OPEN_READ_MODAL(false)">
          <p>닫기</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
import router from "@/router";

export default {
  props: {
    letter: Object,
  },
  data() {
    return {
      dear: "",
      content: "",
      email: "",
      createdAt: "",
      releasedDate: "",
    };
  },
  computed: {
    ...mapState(["isShowReadLetterModal"]),
  },
  watch: {
    letter: function getDetails() {
      axios
        .get(axios.defaults.baseURL + `/letter/${this.letter.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);

          this.dear = res.data.dear;
          this.content = res.data.content;
          this.email = res.data.email;
          this.createdAt = res.data.created_at;
          this.releaseDate = res.data.release_date;
        })
        .catch((err) => {
          const status = err.response.data.status_code;
          if(status === 400) {
            alert("편지를 개봉할 수 없습니다.");
          }
          else if(status === 404) {
            alert("게시글을 찾을 수 없습니다.");
          }
          console.log(err);
          router.go("/main");
        });
    },
  },
  methods: {
    ...mapMutations(["SET_OPEN_READ_MODAL"]),
    deleteLetter() {
      axios
        .delete(axios.defaults.baseURL + "/letter/" + `${this.letter.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          alert("편지가 삭제되었습니다.");
          this.$store.commit("SET_OPEN_READ_MODAL", false);
          router.go("/main");
        })
        .catch((err) => {
          alert("편지를 삭제할 수 없습니다.");
          console.log(err);
        });
    },
  },
};
</script>

<style>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -38%);
}
.letter_box {
  width: 657px;
  height: 502px;
  position: relative;
  background: #ffedc3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  display: flex;

  padding-left: 54px;
  padding-right: 54px;
  padding-top: 22px;
}
.date > p {
  position: absolute;
  height: 16px;
  left: 470px;

  font-family: "Red Hat Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  justify-content: flex-end;

  color: #000000;
}
.exportemail_image {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 649px;
  top: 22px;
}
.trashcan_image {
  position: absolute;
  width: 20.19px;
  height: 25px;
  left: 691px;
  top: 22px;
}
.dear > p {
  position: absolute;
  height: 24px;
  left: 54px;
  top: 54px;

  font-family: "Red Hat Mono";
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: #000000;
}
.content_box {
  position: absolute;
  height: 340px;
  left: 54px;
  right: 54px;
  top: 100px;

  background: #fffdf8;
}
.close_button {
  position: absolute;
  width: 120px;
  height: 40px;

  background: rgba(250, 176, 0, 0.3);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  left: 315px;
  top: 470px;

  cursor: pointer;
}
.close_button > p {
  text-align: center;
  font-family: "Red Hat Mono";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #b47f00;
}
</style>
