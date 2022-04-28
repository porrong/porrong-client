<script>
import axios from 'axios'
import router from '@/router';

export default ({
    mounted() { //페이지가 로딩되자마자 실행되는 메소드    
        const url = window.location.search;
        const code = url.replace('?code=','');

        axios.post('http://localhost:8989/user',
                {
                    "code" : code
                }).then(login_res => {
                    console.log(login_res.access_token)
                    router.go('/main')
                })
    }
})
</script>
