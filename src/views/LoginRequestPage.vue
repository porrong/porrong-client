<script>
import axios from 'axios'
import router from '@/router';

export default ({
    mounted() { //페이지가 로딩되자마자 실행되는 메소드    
        const url = window.location.search;
        const code = url.replace('?code=','');

        axios.post(axios.defaults.baseURL + '/user', {
            "code" : code
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem("access-token", res.data.access_token) //localStorage에 token 저장
            router.push('/main'); //로그인에 성공한 경우 /main으로 이동
            
        }).catch(error => {
            console.log(error.message);
            router.push('/');
            alert('로그인에 실패하였습니다.');
        });
    },
})
</script>