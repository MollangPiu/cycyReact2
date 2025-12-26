import axios from 'axios';

export default function Login() {
    function 로그인() {
        const userId = document.getElementById('id');
        const userPw = document.getElementById('pw');
        const obj = {userId: userId.value, userPw: userPw.value};
        console.log(obj);

        axios.post('http://localhost:8080/api/member/login', obj)
        .then(res=> {
            console.log(res);
        });
    }
    return (
        <div>
            <h1>로그인 페이지</h1>
            ID: <input type="text" id="id"/><br/>
            PW: <input type="password" id="pw"/><br/>
            <input type="button" value="로그인" onClick={로그인}/>
        </div>
    )
}