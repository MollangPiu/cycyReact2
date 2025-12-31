import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

export default function Study() {
    return (
        <div>
            <h1>리덕스 활용</h1>
            <Provider store={store}>
                <입력 />
                <출력 />
            </Provider>
        </div>
    )
}

function 입력() {
    
    const dis = useDispatch();

    return(
        <div>
            <h2>입력 공간</h2>
            <input type="text" id="inp1" />
            <input type="button" value="입력"
            onClick={() =>{
                const input = document.getElementById('inp1');
                dis({input: input.value, type: 'insert'});
            }}
            />
        </div>
    )
}

function 출력() {

    const select = useSelector(state => state.data.input);

    
    return(
        <div>
            <h2>출력 공간</h2>
            <input type="button" value="불러오기"
            onClick={() => {
                console.log(select); // JS에서 활용할 때
            }}
            />
            {select} {/*  화면 출력 */}
        </div>
    )
}