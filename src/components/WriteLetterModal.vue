<template>
  <transition name="modal">
    <div class="box" v-if="isShowWriteLetterModal">
      <div id="letter_box">
        <div class="text">
          <div id="message">
            <p>YOUR MESSAGE:</p>
            <textarea
              class="textarea"
              placeholder="편지를 작성해 주세요"
              maxlength="16000"
              v-model="textarea"
            />
          </div>
          <div class="add_info">
            <div id="dear">
              <p>DEAR</p>
              <input
                class="text_box"
                id="dear_box"
                type="text"
                v-model="dear_box"
              />
            </div>
            <div id="email">
              <p>EMAIL</p>
              <input
                class="text_box"
                id="email_box"
                type="email"
                v-model="email_box"
              />
            </div>
            <div id="open_date">
              <p>OPEN DATE</p>
              <div class="text_box" id="open_date_box">
                <input
                  type="date"
                  id="date"
                  class="text_box"
                  v-model="date_box"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="button_container">
          <div
            class="button cancel"
            @click.prevent="SET_OPEN_WRITE_MODAL(false)"
          >
            <div class="button_text">
              <p>작성 취소</p>
            </div>
          </div>
          <div class="button finish">
            <div class="button_text" @click="btn_click">
              <p>작성 완료</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      textarea: null,
      dear_box: null,
      email_box: null,
      date_box: null,
    };
  },
  computed: {
    ...mapState(["isShowWriteLetterModal"]),
  },
  methods: {
    ...mapMutations(["SET_OPEN_WRITE_MODAL"]),
    btn_click: function () {
      if (
        this.isNotEmpty(this.textarea) &&
        this.isNotEmpty(this.dear_box) &&
        this.isNotEmpty(this.email_box) &&
        this.isNotEmpty(this.date_box)
      ) {
        axios
          .post(
            axios.defaults.baseURL + "/letter",
            {
              content: this.textarea,
              dear: this.dear_box,
              email: this.email_box,
              release_date: this.date_box,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            alert("편지 작성이 완료되었습니다!");
            this.$router.go();
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        alert("다시 확인해 주세요!");
      }
    },
    isNotEmpty: function (value) {
      if (value != "" && value != " " && value != null) {
        return true;
      } else false;
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
#letter_box {
  width: 657px;
  height: 502px;
  position: relative;
  background: #ffedc3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  display: flex;

  padding-left: 54px;
  padding-right: 54px;
  padding-top: 30px;
}
.text {
  font-family: "Red Hat Mono";
  font-weight: 500;
  font-size: 13px;

  color: #000000;

  position: relative;
}
textarea {
  width: 642px;
  height: 290px;
  resize: none;
  overflow: auto;

  font-family: "Red Hat Mono";
  font-weight: 400;
  font-size: 12px;

  padding: 10px;

  background: #fffdf8;
  outline: none;
  border: none;
}
textarea::-webkit-scrollbar {
  width: 5px; /* 스크롤바의 너비 */
}
textarea::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #fab000; /* 스크롤바의 색상 */

  border-radius: 10px;
}
.add_info {
  width: 100%;
  height: 46px;
  left: 388px;
  top: 542px;

  display: flex;
  justify-content: space-between;
}
.text_box {
  width: 150px;
  outline: none;
  border: none;
  height: 27px;
  background: #fffdf8;
}
#dear_box {
  width: 180px;
}
#email_box {
  width: 200px;
}
.button_container {
  display: flex;
  gap: 30px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.button {
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background: rgba(250, 176, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button_text {
  text-align: center;
  font-family: "Red Hat Mono";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #b47f00;
}
</style>
