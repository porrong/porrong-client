<template>
  <div class="container">
    <div id="loginlogo">
      <img src="../assets/loginlogo.svg" />
    </div>
    <div class="description">
      <div id="mean">
        <p>옛 친구에 대한 생각</p>
      </div>
      <div id="servicename">
        <p>"포롱"</p>
      </div>
    </div>
    <div class="kakaooauth" @click="login">
      <div id="kakaoimage">
        <img src="../assets/kakaologin.svg" />
      </div>
      <div id="kakaomessage">
        <p>카카오로 시작하기</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  mounted() {
    localStorage.removeItem("access-token");
  },
  methods: {
    login() {
      axios
        .get(axios.defaults.baseURL + "/kakao/code")
        .then((code_res) => {
          window.location.href = code_res.data;
        })
        .catch((error) => {
          console.log(error);
          alert("로그인에 실패하였습니다.");
          router.go(this);
        });
    },
  },
};
</script>

<style>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 454px;
}
#mean {
  width: 245px;
  margin: 0 auto;
  font-family: "Nanum Brush Script";
  font-size: 40px;
  color: rgba(61, 0, 0, 0.2);
}
#servicename {
  width: 62px;
  margin: 0 auto;
  font-family: "Nanum Brush Script";
  font-size: 40px;
  color: rgba(61, 0, 0, 0.2);
}
#loginlogo {
  margin: 0 auto;
  width: 178px;
  height: 176px;
  pointer-events: none;
}
.kakaooauth {
  margin: 0 auto;
  width: 160px;
  padding: 0 30px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fee500;
  border-radius: 10px;
  cursor: pointer;
}
#kakaoimage {
  height: 24px;
  pointer-events: none;
}
#kakaomessage {
  font-family: "Noto Sans KR";
  color: #3d0000;
}
</style>
