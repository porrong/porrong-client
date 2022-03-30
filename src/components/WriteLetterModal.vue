<template>
  <transition name="modal">
    <div class = "box" v-if="isShowModal">
        <div id="letter_box">
          <div class = "text">
            <div id = "message">
              <p>YOUR MESSAGE:</p>
              <textarea placeholder="편지를 작성해 주세요" maxlength="16000"/>
            </div>
            <div class = "add_info">
              <div id = "dear">
                <p>DEAR</p>
                <input class="text_box" id="dear_box" type="text">
              </div>
              <div id = "email">
                <p>EMAIL</p>
                <input class="text_box" id="email_box" type="email">
              </div>
              <div id = "open_date">
                <p>OPEN DATE</p>
                <div class="text_box" id="open_date_box"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default ({
  computed: {
    ...mapState(['isShowModal'])
  },
  methods: {
    ...mapMutations(['SET_OPEN_MODAL'])
  }
})
</script>


<style>
#letter_box {
  width: 657px;
  height: 502px;

  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #FFEDC3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  display: flex;

  padding-left: 54px;
  padding-right: 54px;
  padding-top: 30px;
}
.text {
  font-family: 'Red Hat Mono';
  font-weight: 500;
  font-size: 13px;

  color: #000000;
}
textarea {
  width: 642px;
  height: 290px;
  resize: none;
  overflow: auto;

  font-family: 'Red Hat Mono';
  font-weight: 400;
  font-size: 12px;

  padding: 10px;

  background: #FFFDF8;
  outline:none;
  border:none;
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
  margin: 0 auto;

  width: 590px;
  height: 46px;
  left: 388px;
  top: 542px;

  display: flex;
}
#dear {
 margin-right: 25px; 
}
.text_box {
  margin: 0 auto;

  outline:none;
  border:none;
  height: 27px;
  
  background: #FFFDF8;
}
#email {
  margin-right: 45px;
}
#dear_box {
  width: 204px;
}
#email_box {
  width: 215px;
}
#open_date_box {
  width: 101px;
}
</style>